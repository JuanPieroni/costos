import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavbarBs from "react-bootstrap/Navbar"
import {  Link } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <NavbarBs bg="dark" data-bs-theme="dark">
            <Container>
                <NavbarBs.Brand href="#home">Yaru Stock</NavbarBs.Brand>
                <Nav className="nav-container justify-content-evenly">
                    <Nav.Item>
                        <Link to="/" style={{color : 'white', textDecoration: 'none'}}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/create" style={{color : 'white', textDecoration: 'none'}} >Crear</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/show" style={{color : 'white', textDecoration: 'none'}}>Listar </Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </NavbarBs>
    )
}

export default Navbar
