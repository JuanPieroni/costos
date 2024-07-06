import React from "react"
import Modal from "../Modal/Modal"
import { useState } from "react"

const ItemTable = ({ item , editItem}) => {
    const { name, price, stock, id } = item

    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td className="d-flex  justify-content-evenly">
                    <i
                        style={{ cursor: "pointer" }}
                        className="bi bi-pencil-square"
                        onClick={() => setModalShow(true)}
                    ></i>
                    <i
                        style={{ cursor: "pointer" }}
                        className="bi bi-trash3-fill "
                    ></i>
                </td>
            </tr>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item={item}
                onSubmit={editItem}
            />
        </>
    )
}

export default ItemTable
