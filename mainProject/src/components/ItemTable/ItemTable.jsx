import React, { useContext } from "react"
import Modal from "../Modal/Modal"
import { useState } from "react"
import { axiosInstance } from "../../services/axios.config"
import { ItemsContext } from "../../context/itemsContext"

const ItemTable = ({ item }) => {
    const { name, price, stock, id, date, lote, category, expireDate } = item

    const [modalShow, setModalShow] = useState(false)

    const { items, dispatch } = useContext(ItemsContext)

    const handleDelete = (id) => {
        axiosInstance.delete(`/${id}`).then((r) => {
            if (r.status === 200) {
                const itemsUpload = items.filter((item) => item.id !== r.data.id)
                dispatch({
                    type: "UPLOAD_ITEMS",
                    payload: itemsUpload
                })
            }
        })
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{category}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td>{lote}</td>
                <td>{date}</td>
                <td>{expireDate}</td>

                <td className="d-flex  justify-content-evenly">
                    <i
                        style={{ cursor: "pointer" }}
                        className="bi bi-pencil-square"
                        onClick={() => setModalShow(true)}
                    ></i>
                    <i
                        style={{ cursor: "pointer" }}
                        className="bi bi-trash3-fill "
                        onClick={() => handleDelete(id)}
                        data-bs-toggle="modal"
                    ></i>
                </td>
            </tr>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item={item}
            />
        </>
    )
}

export default ItemTable
