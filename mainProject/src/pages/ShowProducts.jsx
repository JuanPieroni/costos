import React, { useEffect } from "react"
import { useState } from "react"
import { axiosInstance } from "../services/axios.config.js"

const ShowProducts = () => {
   
   
    const [items, setItems] = useState([])
    
    
    useEffect(() => {
        axiosInstance
            .get("/")
            .then((res) => {
                setItems(res.data)

               
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Show Products</h1>
            <div className="table">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No items</p>
                )}
            </div>
        </div>
    )
}

export default ShowProducts
