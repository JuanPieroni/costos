// src/App.jsx
import React from "react"
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/NavBar/Navbar"
import AppRoutes from "./routes/Routes"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <AppRoutes/>
            </Router>
        </>
    )
}


export default App
