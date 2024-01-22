import React, { useState } from "react";
import { Card, Input } from "reactstrap";
import Harga from "./Harga";
import Kategori from "./Kategori";
import Status from "./Status";
import GreenButton from "../GreenButton";
import { useNavigate } from "react-router-dom";

function Pencarian({ showGreenButton }) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        name: "",
        category: "",
        isRented: false,
        minPrice: null,
        maxPrice: null,
    });

    const handleSearch = () => {
        const validMinPrice = !isNaN(searchParams.minPrice) ? searchParams.minPrice : null;
        const validMaxPrice = !isNaN(searchParams.maxPrice) ? searchParams.maxPrice : '';

        const searchQuery = `?name=${encodeURIComponent(searchParams.name)}&category=${encodeURIComponent(searchParams.category)}&isRented=${searchParams.isRented}&minPrice=${validMinPrice}&maxPrice=${validMaxPrice}`;

        navigate(`/HasilPencarian${searchQuery}`);
    };

    return (
        <Card
            className="d-flex flex-lg-row justify-content-center"
            style={{
                padding: "20px",
                margin: "80px",
            }}
        >
            <div className="m-3">
                <h6>Nama Mobil</h6>
                <Input
                    style={{ width: "16rem" }}
                    placeholder="Ketik nama/tipe mobil"
                    value={searchParams.name}
                    onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
                />
            </div>

            <div className="m-3">
                <h6>Kategori</h6>
                <Kategori
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
                    onStatusChange={(status) => setSearchParams({ ...searchParams, isRented: status })}
                />
            </div>

            <div className="m-3 py-4">
                <GreenButton type="Cari Mobil" onClick={handleSearch} />
            </div>
        </Card>
    );
}

export default Pencarian;
