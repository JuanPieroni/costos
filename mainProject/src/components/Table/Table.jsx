import React from "react"
import TableBs from "react-bootstrap/Table"
import ItemTable from "../ItemTable/ItemTable"

const Table = ({ items, editItem }) => {
    return (
        <>
            <TableBs striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th className=" text-center">Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <ItemTable item={item} key={i} editItem={editItem} />
                    ))}
                </tbody>
            </TableBs>
        </>
    )
}
export default Table
