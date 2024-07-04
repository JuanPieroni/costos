import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const FormCreateProduct = () => {
    const initialValues = {
        name: "",
        description: "",
        stock: "",
        price: "",
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
    })

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
