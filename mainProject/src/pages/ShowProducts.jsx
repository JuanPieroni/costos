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

    const editItem = (id, data) => {
        console.log("editando producto")
        //TODO aca va la logica (PUT)

        axiosInstance
            .put(`/${id}`, data)
            .then((r) => {
                if (r.status === 200) {
                    axiosInstance
                        .get("/")
                        .then((r) => {
                            if (r.status === 200) {
                                setItems(r.data)
                            } else {
                                throw new Error(
                                    `[ERROR ${r.status}] Error en la solicitud`
                                )
                            }
                        })
                        .catch((err) => console.log(err))
                } else {
                    throw new Error(`[ERROR ${r.status}] Error en la solicitud`)
                }
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="container">
            <h1 className="  mb-10 p-5">Stock de Productos</h1>
          
            <div className="table">
                {items.length > 0 ? (
                    <Table items={items} editItem={editItem} />
                ) : (
                    <p>No hay productos</p>
                )}
            </div>
        </div>
    )
}

export default ShowProducts
