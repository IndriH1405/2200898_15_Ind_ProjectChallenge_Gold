function Footer () {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
    }

    return (
    <footer className="container d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-3 me-lg-5 d-flex flex-column">
            <p className="fs-6">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p className="fs-6">binarcarrental@gmail.com</p>
            <p className="fs-6">081-233-334-808</p>
        </div>
        <div className="col-12 col-lg-3 d-flex flex-column px-lg-5">
            <a className="fs-6 mb-3" href="#our-services" style={linkStyle}>
            Our services
            </a>
            <a className="fs-6 mb-3" href="#why-us" style={linkStyle}>
            Why Us?
            </a>
            <a className="fs-6 mb-3" href="#testimonial" style={linkStyle}>
            Testimonial
            </a>
            <a className="fs-6 mb-3" href="#faq" style={linkStyle}>
            FAQ
            </a>
        </div>
        <div className="col-12 col-lg-3 d-flex flex-column">
            <p className="fs-6">Connect with Us</p>
            <div className="d-flex flex-row pb-3">
            <img
                src="./src/assets/icon_facebook.png"
                alt="icon_facebook"
                className="icon m-1"
            />
            <img
                src="./src/assets/icon_instagram.png"
                alt="icon_instagram"
                className="icon m-1"
            />
            <img
                src="./src/assets/icon_twitter.png"
                alt="icon_twitter"
                className="icon m-1"
            />
            <img src="./src/assets/icon_mail.png" alt="icon_mail" className="icon m-1" />
            <img
                src="./src/assets/icon_twitch.png"
                alt="icon_twitch"
                className="icon m-1"
            />
            </div>
        </div>
        <div className="col-12 col-lg-3 flex-column">
            <p className="fs-6">Copyright Binar 2023</p>
            <img 
            src="./src/assets/logo.png"
            alt="logo"
            className="my-1"
            height={34}
            weight={50} 
            />
        </div>
    </footer>
    );
}

export default Footer;