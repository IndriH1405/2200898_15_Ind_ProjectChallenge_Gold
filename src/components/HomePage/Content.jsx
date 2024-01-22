import React, { useState } from 'react';
import { 
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import Testimonial from "./Testimonial";
import GreenButton from '../GreenButton';
import { useNavigate } from "react-router-dom";

function Content () {
    const [open, setOpen] = useState('1');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const navigate = useNavigate();

    return (
    <main className="container my-lg-5 py-lg-5">
            {/* Our Services */}
            <section id="OurServices" className="d-flex flex-column flex-lg-row pt-5">
                <div className="col-12 col-lg-6 pt-5 px-4 p-lg-5">
                    <img src="./src/assets/img_service.png" className="img-fluid"/>
                </div>

                <div className="col-12 col-lg-6 py-5 px-3">
                    <div className="fs-2 fw-bold mb-4">
                    Best Car Rental for any kind of trip in (Lokasimu)!
                    </div>
                    <p className="font-p">
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
                    murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                    pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                    dll.
                    </p>
                    <ul className="font-p my-4 px-0">
                    <li className="list-group-item my-3">
                        <img
                        src="./src/assets/checklist.png"
                        alt="checklist"
                        className="me-2"
                        width={24}
                        height={24}
                        />
                        Sewa Mobil Dengan Supir di Bali 12 Jam
                    </li>
                    <li className="list-group-item my-3">
                        <img
                        src="./src/assets/checklist.png"
                        alt="checklist"
                        className="me-2"
                        width={24}
                        height={24}
                        />
                        Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </li>
                    <li className="list-group-item my-3">
                        <img
                        src="./src/assets/checklist.png"
                        alt="checklist"
                        className="me-2"
                        width={24}
                        height={24}
                        />
                        Sewa Mobil Jangka Panjang Bulanan
                    </li>
                    <li className="list-group-item my-3">
                        <img
                        src="./src/assets/checklist.png"
                        alt="checklist"
                        className="me-2"
                        width={24}
                        height={24}
                        />
                        Gratis Antar - Jemput Mobil di Bandara
                    </li>
                    <li className="list-group-item my-3">
                        <img
                        src="./src/assets/checklist.png"
                        alt="checklist"
                        className="me-2"
                        width={24}
                        height={24}
                        />
                        Layanan Airport Transfer / Drop In Out
                    </li>
                    </ul>
                </div>
            </section>

            {/* Why Us */}
            <section id="WhyUs" className="container my-lg-5 py-4">
                <div className="d-flex d-flex flex-column align-items-center flex-lg-column justify-content-center">
                    <h1 className="fw-bold my-lg-4">Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>

                <div className="container d-flex flex-column align-items-center flex-lg-row align-items-lg-start">

                    <div
                    className="card m-lg-3"
                    style={{ width: "18rem", margin: "1rem", padding: "2rem" }}
                    >
                    <img
                    src="./src/assets/icon_complete.png"
                    className="icon card-img-top mb-3"
                    alt="icon_complete"
                    style={{ width: 32, height: 32}}
                    />
                    <h5 className="card-title mb-3">Mobil Lengkap</h5>
                    <p className="card-text mb-3" style={{ fontSize: 14 }}>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </p>
                    </div>

                    <div
                    className="card m-lg-3"
                    style={{ width: "18rem", margin: "1rem", padding: "2rem" }}
                    >
                    <img
                    src="./src/assets/icon_price.png"
                    className="icon card-img-top mb-3"
                    alt="icon_price"
                    style={{ width: 32, height: 32}}
                    />
                    <h5 className="card-title mb-3">Harga Murah</h5>
                    <p className="card-text" style={{ fontSize: 14 }}>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                    lain
                    </p>
                    </div>

                    <div
                    className="card m-lg-3"
                    style={{ width: "18rem", margin: "1rem", padding: "2rem" }}
                    >
                    <img
                    src="./src/assets/icon_24hrs.png"
                    className="icon card-img-top mb-3"
                    alt="icon_24hrs"
                    style={{ width: 32, height: 32}}
                    />
                    <h5 className="card-title mb-3">Layanan 24 Jam</h5>
                    <p className="card-text" style={{ fontSize: 14 }}>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
                    di akhir minggu
                    </p>
                    </div>

                    <div
                    className="card m-lg-3"
                    style={{ width: "18rem", margin: "1rem", padding: "2rem" }}
                    >
                    <img
                    src="./src/assets/icon_professional.png"
                    className="icon card-img-top mb-3"
                    alt="icon_professional.png"
                    style={{ width: 32, height: 32}}
                    />
                    <h5 className="card-title mb-3">Sopir Profesional</h5>
                    <p className="card-text" style={{ fontSize: 14 }}>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                    waktu
                    </p>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section id="Testimonial" className="container my-lg-5 py-5">
                <div className="d-flex flex-column align-items-center text-center pb-3">
                    <h1 className="fw-bold pb-2">Testimonial</h1>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
            
            <Testimonial />

            </section>

            {/* Sewa Mobil Container */}
            <section className="card my-lg-4 py-5 text-light" style={{ backgroundColor: "#0D28A6" }}>
                <div className="card-body d-flex flex-column align-items-center text-center m-2 p-3">
                    <h1 className="font-title">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="font-p mt-3 text-center" style={{ width: "80%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <GreenButton onClick={() => navigate("/CariMobil")} type={<strong>Mulai Sewa Mobil</strong>}/>

                </div>
            </section>

            {/* FAQ */}
            <section id="FAQ" className="container my-5 py-5 d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-6 d-flex flex-column text-center text-lg-start">
                    <h1 className="fw-bold fs-2 me-lg-5">Frequently Asked Question</h1>
                    <p className="fs-6 text-center text-lg-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>

                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem className="my-4">
                        <AccordionHeader targetId="1">Apa saja syarat yang dibutuhkan?</AccordionHeader>
                        <AccordionBody accordionId="1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi assumenda expedita earum officia unde a perferendis 
                            sunt soluta debitis culpa?
                        </AccordionBody>
                        </AccordionItem>
                    </Accordion>

                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem className="my-4">
                        <AccordionHeader targetId="2">Berapa hari minimal sewa mobil lepas kunci?</AccordionHeader>
                        <AccordionBody accordionId="2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi assumenda expedita earum officia unde a perferendis 
                            sunt soluta debitis culpa?
                        </AccordionBody>
                        </AccordionItem>
                    </Accordion>

                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem className="my-4">
                        <AccordionHeader targetId="3">Berapa hari sebelumnya sebaiknya booking sewa mobil?</AccordionHeader>
                        <AccordionBody accordionId="3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi assumenda expedita earum officia unde a perferendis 
                            sunt soluta debitis culpa?
                        </AccordionBody>
                    </AccordionItem>
                    </Accordion>

                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem className="my-4">
                        <AccordionHeader targetId="4">Apakah Ada biaya antar-jemput?</AccordionHeader>
                        <AccordionBody accordionId="4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi assumenda expedita earum officia unde a perferendis 
                            sunt soluta debitis culpa?
                        </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem className="my-4">
                        <AccordionHeader targetId="5">Bagaimana jika terjadi kecelakaan?</AccordionHeader>
                        <AccordionBody accordionId="5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nisi assumenda expedita earum officia unde a perferendis 
                            sunt soluta debitis culpa?
                        </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
    </main>
    );
}

export default Content;