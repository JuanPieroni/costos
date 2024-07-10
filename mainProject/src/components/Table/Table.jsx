import React from "react"
import TableBs from "react-bootstrap/Table"
import ItemTable from "../ItemTable/ItemTable"

const Table = ({ items }) => {
    return (
        <>
            <TableBs striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Producto</th>
                        <th>Precio(kg)</th>
                        <th>Stock</th>
                     <th>Nro de lote</th>
                        <th>Fecha de compra</th>
                        <th>Vencimiento</th>
                        <th className=" text-center">Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <ItemTable item={item} key={i}   />
                    ))}
                </tbody>
            </TableBs>
        </>
    )
}
export default Table
