import { useNavigate } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";


const Paso1 = () =>{

    const navigate = useNavigate(); // Declarar para ausar el navigate
    const validacionesPaso1= Yup.object({
        nombre: Yup.string().required("El nombre es requerido"),
        apellido: Yup.string().required("El telefono es requerido"),
        correo: Yup.string().email("El correo no es valido").required("El correo es requerido"),
        telefono: Yup.string().required("El telefono es requerido"),
    });

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            correo: "",
            telefono: "",
        },
        validationSchema: validacionesPaso1,
        onSubmit: () => { navigate("/paso2") } //Cambiar al siguiente paso(pagina)
    });


    return(
        <div>
            <h2>Paso 1</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                    name="nombre"
                    type="text" 
                    value={formik.values.nombre}
                    onChange= {formik.handleChange}
                    onBlur={formik.handleBlur} //Actualziar pobjeto touched para validar el input
                    placeholder="Ingrese su nombre"
                    isInvalid={!!formik.errors.nombre && formik.touched.nombre } //!! Doble negacion
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.nombre}
                    </Form.Control.Feedback>
                </Form.Group>
                    
                <Form.Group controlId="apellido">
                <Form.Label>apellido</Form.Label>
                    <Form.Control 
                    name="apellido"
                    type="text" 
                    value= {formik.values.apellido}
                    onChange= {formik.handleChange} //Actualizar el campo apenas se va diligenciando
                    onBlur={formik.handleBlur}
                    placeholder="Ingrese su apellido"
                    isInvalid={!!formik.errors.apellido && formik.touched.apellido }
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.apellido}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="correo">
                <Form.Label>Correo</Form.Label>
                    <Form.Control 
                    name="correo"
                    type="text" 
                    value= {formik.values.correo}
                    onChange= {formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Ingrese su correo"
                    isInvalid={!!formik.errors.correo && formik.touched.correo }
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.correo}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="telefono">
                <Form.Label>Telefono</Form.Label>
                    <Form.Control 
                    name="telefono"
                    type="text" 
                    value= {formik.values.telefono}
                    onChange= {formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Ingrese su telefono"
                    isInvalid={!!formik.errors.telefono && formik.touched.telefono }
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.telefono}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Siguiente</Button>
            </Form>
        </div>
    )
};

export default Paso1;