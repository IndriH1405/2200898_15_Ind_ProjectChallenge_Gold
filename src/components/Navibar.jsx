import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    } from "reactstrap";

function Navibar() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    }

    return (
        <div>
        <Navbar 
        expand="md" 
        className="d-none d-md-block p-lg-4"
        style={{ backgroundColor: "#F1F3FF" }}
        >
            <NavbarBrand href="/" className="container-fluid justify-content-start mx-lg-4 px-lg-5">
                <img src="./src/assets/logo.png"/>
            </NavbarBrand>

            <Nav className="me-auto container-fluid d-flex flex-row justify-content-end px-lg-5" navbar>
                <NavItem className="px-lg-3">
                    <NavLink href="#OurServices" style={linkStyle}>
                    Our Services
                    </NavLink>
                </NavItem>
                <NavItem className="px-lg-3">
                    <NavLink href="#WhyUs" style={linkStyle}>
                    Why Us
                    </NavLink>
                </NavItem>
                <NavItem className="px-lg-3">
                    <NavLink href="#Testimonial" style={linkStyle}>
                    Testimonial
                    </NavLink>
                </NavItem>
                <NavItem className="px-lg-3">
                    <NavLink href="#FAQ" style={linkStyle}>
                    FAQ
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>

        {/* Offcanvas Toggler */}
        <Navbar 
        expand="md" 
        className="d-md-none"
        style={{ backgroundColor: "#F1F3FF" }}
        >
            <NavbarBrand href="/" className="d-md-display">
                <img src="./src/assets/logo.png"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggleOffcanvas} />
        </Navbar>

        <Offcanvas 
        isOpen={isOffcanvasOpen} 
        toggle={toggleOffcanvas} 
        className="d-md-none"
        direction="end"
        scrollable
        >
            <OffcanvasHeader>
                <NavbarBrand href="/">
                    BCR
                </NavbarBrand>
            </OffcanvasHeader>

            <OffcanvasBody>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href="#OurServices" style={linkStyle}>
                    Our Services
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#WhyUs" style={linkStyle}>
                    Why Us
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#Testimonial" style={linkStyle}>
                    Testimonial
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#FAQ" style={linkStyle}>
                    FAQ
                    </NavLink>
                </NavItem>
            </Nav>
            </OffcanvasBody>
        </Offcanvas>
        </div>
    );
}

export default Navibar;
