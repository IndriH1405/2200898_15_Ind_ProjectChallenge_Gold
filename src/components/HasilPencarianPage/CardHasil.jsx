import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import GreenButton from "../GreenButton";
import { formatCurrency } from "../FormatCurrenci";
import { Link } from "react-router-dom";

function CardHasil({ cars }) {
    const placeholderImage = "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center flex-lg-row align-items-lg-start pb-5">
                {cars.length > 0 ? (
                <>
                {cars.slice(0,3).map((car) => (
                    <div key={car.id} className="col-lg-4 m-lg-3">
                        <Card>
                            <CardImg
                                src={car.image || placeholderImage}
                                alt="Card image cap"
                                width={270} 
                                height={160}
                            />
                            <CardBody>
                                <CardSubtitle tag="h6">{car.name}</CardSubtitle>
                                <CardTitle tag="h5">{formatCurrency(car.price)} / hari</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </CardText>

                                <Link key={car.id} to={`/DetailPaket/${car.id}`}>
                                    <GreenButton type="Pilih Mobil" className="container" />
                                </Link>
                                
                            </CardBody>
                        </Card>
                    </div>
                ))}
                </>
            ):(
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default CardHasil;
