import React from "react"
import { Formik, Form, Field, ErrorMessage  } from "formik"
import * as Yup from "yup"
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';
 

const FormCreateProduct = () => {
    // Función para formatear la fecha
    const formatDate = (date) => {
        return date.toISOString().split("T")[0]
    }
    const initialValues = {
        name: "",
        description: "",
        stock: "",
        price: "",
        lote: "",
        date: formatDate(new Date()),
        expireDate: formatDate(new Date()),
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
    // REFACTORIZAR form field. hacer un componente nuevo
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ values, isSubmitting, errors, touched }) => (
                    <Form>

                        <label htmlFor="name">Nombre del producto</label>
                        <Field id="name" type="text" name="name" />
                        {errors.name && touched.name && (
                            <ErrorMessage name="name" component="div" />
                        )}
                        <label htmlFor="description">
                            Descripcion del producto
                        </label>
                        <Field
                            id="description"
                            type="text"
                            name="description"
                        />
                        {errors.description && touched.description && (
                            <ErrorMessage name="description" component="div" />
                        )}

                        {/* SACAR LAS FLECHITAS DE LOS LABELS (y chequear que reciba la info) */}
                        <label htmlFor="stock">Stock</label>
                        <Field id="stock" type="number" name="stock" />
                        {errors.stock && touched.stock && (
                            <ErrorMessage name="stock" component="div" />
                        )}
                        <label htmlFor="price">Precio</label>
                        <Field id="price" type="number" name="price" />
                        {errors.price && touched.price && (
                            <ErrorMessage name="price" component="div" />
                        )}
                        <label htmlFor="date">Fecha de Compra </label>
                        <Field id="date" type="date" name="date" />
                        {errors.date && touched.date && (
                            <ErrorMessage name="date" component="div" />
                        )}
                        <label htmlFor="expireDate">Fecha de Vencimiento</label>
                        <Field id="expireDate" type="date" name="expireDate" />
                        {errors.expireDate && touched.expireDate && (
                            <ErrorMessage name="expireDate" component="div" />
                        )}
                        <label htmlFor="lote">Lote</label>
                        <Field id="lote" type="text" name="lote" />
                        {errors.lote && touched.lote && (
                            <ErrorMessage name="lote" component="div" />
                        )}
                        <button type="submit">Cargar bueno producto</button>
                        {isSubmitting ? (
                            <p>Enviando nuevo Producto </p>
                        ) : (
                            <p>Verifique las entradas</p>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormCreateProduct
