import React from "react"

const ItemTable = ({ item }) => {
    const { name, price, stock, id } = item
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td className="d-flex  justify-content-evenly">
                <i
                    style={{ cursor: "pointer" }}
                    className="bi bi-trash3-fill "
                ></i>

                <i
                    style={{ cursor: "pointer" }}
                    className="bi bi-pencil-square  "
                ></i>
            </td>
        </tr>
    )
}

export default ItemTable
