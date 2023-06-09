import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Navbar, Nav, Container, Card } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const Paso4 = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const selector = useSelector(state=>state);

    const validacionPaso4 = Yup.object({
        biografia: Yup.string().required('La biografia es requerida')        
    });

    const formik = useFormik({
        initialValues: {
            biografia: selector.biografia,
        },
        validationSchema: validacionPaso4,
        onSubmit: (values) => { 
            dispatch({ 
                type: "AGREGAR_DATOS", 
                payload: values
            });
            navigate("/paso5") }
    });


    return (
        <div>
                <Navbar bg="red" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/paso1">Paso 1</Nav.Link>
                            <Nav.Link href="/paso2">Paso 2</Nav.Link>
                            <Nav.Link href="/paso3">Paso 3</Nav.Link>
                            <Nav.Link href="/Paso5">Paso 5</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Paso 4. Biografia</h2>
            <Card style={{ width: '30rem', margin: '0 auto', padding: '10px', color: 'darkblack', fontFamily: 'arial', boxShadow: '5px 5px 5px black'}}>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="biografia">
                        <h3 style={{fontFamily: 'negrilla'}}>Ingrese todos los datos</h3>
                        <hr />
                        <Form.Label>Biografia:</Form.Label>
                        <Form.Control
                            name="biografia"
                            as="textarea"
                            value={formik.values.biografia}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese la empresa en la que labora"
                            isInvalid={!!formik.errors.biografia && formik.touched.biografia}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.biografia}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="button"onClick={() => navigate("/paso3")} style={{padding: '5px', marginTop: '10px', marginRight: '5px'}}>Anterior</Button>
                    <Button variant="primary" type="submit" style={{padding: '5px', marginTop: '10px'}}>Siguiente</Button>
                </Form>
            </Card>
        </div>
    );


};

export default Paso4;