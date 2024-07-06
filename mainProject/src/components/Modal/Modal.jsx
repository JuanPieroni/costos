import React from "react"
import Button from "react-bootstrap/Button"
import ModalBs from "react-bootstrap/Modal"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import FormBs from "react-bootstrap/Form"

const Modal = (props) => {
    const formatDate = (date) => {
        return date.toISOString().split("T")[0]
    }
    const initialValues = {
        name: props.item.name || "",
        description: props.item.description || "",
        stock: props.item.stock || "",
        price: props.item.price || "",
        date: formatDate(new Date()) || "",
        expireDate: formatDate(new Date()) || "",
        lote: props.item.lote || "",
    }
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, "nombre demasiado corto")
            .max(20, "nombre demasiado largo")
            .required("Este campo es obligatorio"),
        description: Yup.string()
            .min(10, "descripcion demasiado corta")
            .max(100, "descripcion demasiado larga")
            .required("Este campo es obligatorio"),
        stock: Yup.number().required("Este campo es obligatorio"),
        price: Yup.number().required("Este campo es obligatorio"),
        date: Yup.date().required("Este campo es obligatorio"),
        expireDate: Yup.date().required("Este campo es obligatorio"),
        lote: Yup.string().required("Este campo es obligatorio"),
    })
    return (
        <>
            <ModalBs
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalBs.Header closeButton className="bg-dark">
                    <ModalBs.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </ModalBs.Title>
                </ModalBs.Header>
                <ModalBs.Body className="bg-dark">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={formSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            console.log(values)
                            await props.onSubmit(props.item.id, values)
                            setSubmitting(false)
                            props.onHide()
                        }}
                    >
                        {({
                            values,
                            isSubmitting,
                            errors,
                            touched,
                            handleChange,
                        }) => (
                            <Form>
                                <FormBs.Group className="mb-3">
                                    <label htmlFor="name">
                                        Nombre del producto
                                    </label>
                                    <Field
                                        className="form-control field-input"
                                        onChange={handleChange}
                                        id="name"
                                        type="text"
                                        name="name"
                                    />
                                    {errors.name && touched.name && (
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                        />
                                    )}
                                </FormBs.Group>
                                <FormBs.Group className="mb-3">
                                    <label htmlFor="description">
                                        Descripcion del producto
                                    </label>
                                    <Field
                                        onChange={handleChange}
                                        className="form-control field-input"
                                        id="description"
                                        type="text"
                                        name="description"
                                    />
                                    {errors.description &&
                                        touched.description && (
                                            <ErrorMessage
                                                name="description"
                                                component="div"
                                            />
                                        )}
                                </FormBs.Group>
                                <FormBs.Group className="mb-3">
                                    {/* SACAR LAS FLECHITAS DE LOS LABELS (y chequear que reciba la info) */}
                                    <label htmlFor="stock">Stock</label>
                                    <Field
                                        onChange={handleChange}
                                        className="form-control field-input"
                                        id="stock"
                                        type="number"
                                        name="stock"
                                    />
                                    {errors.stock && touched.stock && (
                                        <ErrorMessage
                                            name="stock"
                                            component="div"
                                        />
                                    )}
                                </FormBs.Group>
                                <FormBs.Group className="mb-3">
                                    <label htmlFor="price">Precio</label>
                                    <Field
                                        onChange={handleChange}
                                        className="form-control field-input"
                                        id="price"
                                        type="number"
                                        name="price"
                                    />
                                    {errors.price && touched.price && (
                                        <ErrorMessage
                                            name="price"
                                            component="div"
                                        />
                                    )}
                                </FormBs.Group>
                                <FormBs.Group className="mb-3">
                                    <label htmlFor="date">
                                        Fecha de Compra{" "}
                                    </label>
                                    <Field
                                        onChange={handleChange}
                                        className="form-control field-input"
                                        id="date"
                                        type="date"
                                        name="date"
                                    />
                                    {errors.date && touched.date && (
                                        <ErrorMessage
                                            name="date"
                                            component="div"
                                        />
                                    )}
                                </FormBs.Group>
                                <FormBs.Group className="mb-3">
                                    <label htmlFor="expireDate">
                                        Fecha de Vencimiento
                                    </label>
                                    <Field
                                        onChange={handleChange}
                                        className="form-control field-input"
                                        id="expireDate"
                                        type="date"
                                        name="expireDate"
                                    />
                                    {errors.expireDate &&
                                        touched.expireDate && (
                                            <ErrorMessage
                                                name="expireDate"
                                                component="div"
                                            />
                                        )}
                                </FormBs.Group>

                                <FormBs.Group className="mb-3">
                                    <label htmlFor="lote">Numero de Lote</label>
                                    <Field
                                        onChange={handleChange}
                                        className="form-control field-input"
                                        id="lote"
                                        type="text"
                                        name="lote"
                                    />
                                    {errors.lote && touched.lote && (
                                        <ErrorMessage
                                            name="lote"
                                            component="div"
                                        />
                                    )}
                                </FormBs.Group>

                                <Button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Cargar nuevo producto
                                </Button>
                                {isSubmitting ? (
                                    <p>Enviando nuevo Producto </p>
                                ) : null}
                            </Form>
                        )}
                    </Formik>
                </ModalBs.Body>
                <ModalBs.Footer className="bg-dark">
                    <Button onClick={props.onHide}>Close</Button>
                </ModalBs.Footer>
            </ModalBs>
        </>
    )
}

export default Modal
