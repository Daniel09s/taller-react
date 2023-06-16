import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Navbar, Nav, Container, Card } from "react-bootstrap";



const Paso1 = () =>{

    const navigate = useNavigate(); // Declarar para ausar el navigate
    
    const dispatch = useDispatch();

    const selector = useSelector( state => state); //Devolver el estado


    const validacionesPaso1= Yup.object({
        nombre: Yup.string().required("El nombre es requerido"),
        apellido: Yup.string().required("El telefono es requerido"),
        correo: Yup.string().email("El correo no es valido").required("El correo es requerido"),
        telefono: Yup.string().required("El telefono es requerido"),
    });

    const formik = useFormik({
        initialValues: {
            nombre: selector.nombre,
            apellido: selector.apellido,
            correo: selector.correo,
            telefono: selector.telefono,
        },
        validationSchema: validacionesPaso1,
        onSubmit: (values) => { 
            dispatch({ 
                type: "AGREGAR_DATOS", 
                payload: values
            });
            navigate("/paso2") } //Cambiar al siguiente paso(pagina)
    });


    return(
        <div >
                {/*<Navbar bg="red" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/paso2">Paso 2</Nav.Link>
                            <Nav.Link href="/paso3">Paso 3</Nav.Link>
                            <Nav.Link href="/Paso4">Paso 4</Nav.Link>
                            <Nav.Link href="/Paso5">Paso 5</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
    </Navbar>*/}

                <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Paso 1. Datos Personales</h2>
            <Card style={{ width: '30rem', margin: '0 auto', padding: '10px', color: 'darkblack', fontFamily: 'arial', boxShadow: '5px 5px 5px black'}}>
                <Form onSubmit={formik.handleSubmit}>

                    <Form.Group controlId="nombre">
                        <h3 style={{fontFamily: 'negrilla'}}>Ingrese todos los datos</h3>
                        <hr />
                        <Form.Label>Nombre:</Form.Label>
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
                    <Form.Label>Apellido:</Form.Label>
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
                    <Form.Label>Correo:</Form.Label>
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
                    <Form.Label>Telefóno:</Form.Label>
                        <Form.Control 
                        name="telefono"
                        type="number" 
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

                    <Button variant="primary" type="submit" style={{padding: '5px', marginTop: '10px'}}>Siguiente</Button>
                </Form>
            </Card>
        </div>
    )
};

export default Paso1;