import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Button from "react-bootstrap/Button"
import FormBs from "react-bootstrap/Form"
import { axiosInstance } from "../../services/axios.config.js"
const FormCreateProduct = () => {
    // Función para formatear la fecha
    const formatDate = (date) => {
        return date.toISOString().split("T")[0]
    }
    const initialValues = {
        name: "",
        category: "",
        stock: "",
        price: "",
        lote: "",
        date: formatDate(new Date()),
        expireDate: formatDate(new Date()),
    }
    const formSchema = Yup.object().shape({
        name: Yup.string(),
        category: Yup.string(),
        stock: Yup.number().required("Este campo es obligatorio"),
        price: Yup.number().required("Este campo es obligatorio"),
        date: Yup.date().required("Este campo es obligatorio"),
        expireDate: Yup.date().required("Este campo es obligatorio"),
        lote: Yup.string().required("Este campo es obligatorio"),
    })
    // REFACTORIZAR form field. hacer un componente nuevo
    return (
        <>
            <div className="container text-center w-50">
                <Formik
                    initialValues={initialValues}
                    validationSchema={formSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        axiosInstance
                            .post("/", values)
                            .then((response) => {
                                if (response.status === 201) {
                                    console.log(response)
                                    setSubmitting(false)
                                    resetForm()
                                    alert("Producto subido al servidor")
                                } else {
                                    throw new Error(
                                        `[${r.status}]Hubo un error`
                                    )
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    }}
                >
                    {({ values, isSubmitting, errors, touched }) => (
                        <Form>
                            <FormBs.Group className="mb-3">
                                <label htmlFor="name">
                                    Nombre del producto
                                </label>
                                <Field
                                    className="form-control field-input"
                                    id="name"
                                    type="text"
                                    name="name"
                                />
                                {errors.name && touched.name && (
                                    <ErrorMessage name="name" component="div" />
                                )}
                            </FormBs.Group>
                            <FormBs.Group className="mb-3">
                                <label htmlFor="category">Categoria</label>
                                <Field
                                    className="form-control field-input"
                                    id="category"
                                    type="text"
                                    name="category"
                                />
                                {errors.category && touched.category && (
                                    <ErrorMessage
                                        name="category"
                                        component="div"
                                    />
                                )}
                            </FormBs.Group>
                            <FormBs.Group className="mb-3">
                                {/* SACAR LAS FLECHITAS DE LOS LABELS (y chequear que reciba la info) */}
                                <label htmlFor="stock">Stock</label>
                                <Field
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
                                <label htmlFor="date">Fecha de Compra </label>
                                <Field
                                    className="form-control field-input"
                                    id="date"
                                    type="date"
                                    name="date"
                                />
                                {errors.date && touched.date && (
                                    <ErrorMessage name="date" component="div" />
                                )}
                            </FormBs.Group>
                            <FormBs.Group className="mb-3">
                                <label htmlFor="expireDate">
                                    Fecha de Vencimiento
                                </label>
                                <Field
                                    className="form-control field-input"
                                    id="expireDate"
                                    type="date"
                                    name="expireDate"
                                />
                                {errors.expireDate && touched.expireDate && (
                                    <ErrorMessage
                                        name="expireDate"
                                        component="div"
                                    />
                                )}
                            </FormBs.Group>

                            <FormBs.Group className="mb-3">
                                <label htmlFor="lote">Numero de Lote</label>
                                <Field
                                    className="form-control field-input"
                                    id="lote"
                                    type="text"
                                    name="lote"
                                />
                                {errors.lote && touched.lote && (
                                    <ErrorMessage name="lote" component="div" />
                                )}
                            </FormBs.Group>

                            <Button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                Cargar nuevo producto
                            </Button>
                            {isSubmitting ? (
                                <p>Enviando nuevo Producto </p>
                            ) : null}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default FormCreateProduct
