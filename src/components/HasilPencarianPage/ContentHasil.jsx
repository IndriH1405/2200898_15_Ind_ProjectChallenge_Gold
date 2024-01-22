import React, { useState, useEffect } from "react";
import { Button, Card, Input } from "reactstrap";
import Kategori from "../CariMobilPage/Kategori";
import Harga from "../CariMobilPage/Harga";
import Status from "../CariMobilPage/Status";
import CardHasil from "./CardHasil";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function ContentHasil() {
    const [searchParams, setSearchParams] = useState({
        name: "",
        category: "",
        isRented: false,
        minPrice: null,
        maxPrice: null,
    });

    const [cars, setCars] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParamsFromURL = new URLSearchParams(location.search);
        const name = searchParamsFromURL.get("name") || "";
        const category = searchParamsFromURL.get("category") || "";
        const isRented = searchParamsFromURL.get("isRented") || false;
        const minPrice = searchParamsFromURL.get("minPrice") || null;
        const maxPrice = searchParamsFromURL.get("maxPrice") || null;

        setSearchParams({
            name,
            category,
            isRented: isRented === "true",
            minPrice: minPrice ? parseInt(minPrice) : null,
            maxPrice: maxPrice ? parseInt(maxPrice) : null,
        });
    }, [location.search]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api-car-rental.binaracademy.org/customer/v2/car",
                    {
                        params: searchParams,
                    }
                );
                setCars(response.data.cars);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (searchParams.name || searchParams.category || searchParams.isRented !== null || searchParams.minPrice !== null || searchParams.maxPrice !== null) {
            fetchData();
        }
    }, [searchParams]);

    const handleSearch = () => {
        navigate("/HasilPencarian", {
            search: `?name=${searchParams.name}&category=${searchParams.category}&isRented=${searchParams.isRented}&minPrice=${searchParams.minPrice}&maxPrice=${searchParams.maxPrice}`,
        });
    };

    return (
        <div className="row">
            <div className="container-fluid pt-4" style={{ backgroundColor: "#F1F3FF", height: "60vh", overflow: "visible", marginBottom: "8rem" }}>
                <Card className="d-flex justify-content-center" style={{ padding: "20px", margin: "20% 5% 0% 5%", position: "relative" }}>
                    <h3><strong>Pencarianmu</strong></h3>

                    <div className="d-flex flex-column flex-lg-row justify-content-center">
                        <div className="m-3">
                            <h6>Nama Mobil</h6>
                            <Input
                                id="searchName"
                                style={{ width: "12rem" }}
                                placeholder="Ketik nama/tipe mobil"
                                value={searchParams.name}
                                onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
                            />
                        </div>

                        <div className="m-3">
                            <h6>Kategori</h6>
                            <Kategori
                                id="searchCategory"
                                onCategoryChange={(category) => setSearchParams({ ...searchParams, category })}
                            />
                        </div>

                        <div className="m-3">
                            <h6>Harga</h6>
                            <Harga
                                direction="down"
                                onPriceChange={({ minPrice, maxPrice }) => setSearchParams({ ...searchParams, minPrice, maxPrice })}
                            />
                        </div>

                        <div className="m-3">
                            <h6>Status</h6>
                            <Status
                                id="searchIsRented"
                                onStatusChange={(status) => setSearchParams({ ...searchParams, isRented: status })}
                            />
                        </div>

                        <div className="m-3 py-4">
                            <Button onClick={handleSearch}>Edit</Button>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="row">
                <div className="my-lg-5 py-lg-5">
                    <CardHasil cars={cars} />
                </div>
            </div>
        </div>
    );
}

export default ContentHasil;
