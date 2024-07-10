// src/App.jsx
import React, { useReducer } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "./components/NavBar/Navbar"
import AppRoutes from "./routes/Routes"
import { ItemsContext, ItemReducer } from "./context/itemsContext"

function App() {
    const initialState = []

    const [items, dispatch] = useReducer(ItemReducer, initialState)
   
    return (
        <>
            <Router>
                <ItemsContext.Provider 
                
                    value={{ items, dispatch }}
                >
                    <Navbar />
                    <AppRoutes />
                </ItemsContext.Provider>
            </Router>
        </>
    )
}

export default App
