import React, { useEffect } from "react"
import { useState } from "react"
import { axiosInstance } from "../services/axios.config.js"
import Table from "../components/Table/Table.jsx"

const ShowProducts = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axiosInstance
            .get("/")
            .then((r) => {
                setItems(r.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container">
        
            <h1>Show Products</h1>
            <button>Cargar Productos</button>
            <div className="table">
                {items.length > 0 ? <Table items={items} /> : <p>No hay productos</p>}
            </div>
        </div>
    )
}

export default ShowProducts
