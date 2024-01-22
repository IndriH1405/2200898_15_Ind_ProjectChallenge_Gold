import { useNavigate } from "react-router-dom";
import GreenButton from "./GreenButton";

function Heroes ({ showGreenButton = true }) {

    const navigate = useNavigate();

    return (
    <section className="container-fluid pt-4" 
    style={{ backgroundColor: "#F1F3FF" }}
    >
        <div className="row flex-md-row">
            <div className="col-12 col-lg-4 offset-lg-1 col-xxl-4 offset-xxl-2 g-lg-0 py-3">
                <span className="row flex-md-row">
                <h1>Sewa &amp; Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                <p className="lead fs-6">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
                sewa mobil 24 jam.
                </p>
                </span>

                {showGreenButton && (
                    <GreenButton onClick={() => navigate("/CariMobil")}  type="Mulai Sewa Mobil" />
                )}
            </div>

            <div className="col-12 col-lg-6 offset-lg-1 col-xxl-5 offset-xxl-1 ps-3 pt-5 g-0">
                <img
                src="./src/assets/img_car.png"
                className="img-fluid"
                alt="img-car"
                width={704}
                height={407}
                loading="lazy"
                />
            </div>
        </div>
    </section>
    );
}

export default Heroes;