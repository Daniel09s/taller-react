import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Navbar, Nav, Container, Card } from "react-bootstrap";

const Paso5 = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const selector = useSelector( state=> state);

    const validacionPaso5 = Yup.object({
        nombre1: Yup.string().required('El nombre de referencia 1 es requerido'),
        correo1: Yup.string().required('El correo de referencia 1 es requerido'),
        telefono1: Yup.string().required('El telefono de referencia 1 es requerido'),
        nombre2: Yup.string().required('El nombre de referencia 2 es requerido'),
        correo2: Yup.string().required('El correo de referencia 2 es requerido'),
        telefono2: Yup.string().required('El telefono de referencia 2 es requerido'),
    });

    const formik = useFormik({
        initialValues: {
            nombre1: selector.nombre1,
            correo1: selector.correo1,
            telefono1: selector.telefono1,
            nombre2: selector.nombre2,
            correo2: selector.correo2,
            telefono2: selector.telefono2,
        },
        validationSchema: validacionPaso5,
        onSubmit: (values) => { 
            dispatch({ 
                type: "AGREGAR_DATOS", 
                payload: values
            });
            navigate("/resumen") }
        
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
                            <Nav.Link href="/Paso4">Paso 4</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Paso 5. Referencias personales</h2>
            <Card style={{ width: '30rem', margin: '0 auto', padding: '10px', color: 'darkblack', fontFamily: 'arial', boxShadow: '5px 5px 5px black'}}>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="nombre1">
                        <h3 style={{fontFamily: 'negrilla'}}>Ingrese todos los datos</h3>
                        <hr />
                        <h4>Referencia personal #1</h4>
                        <Form.Label>Nombre completo:</Form.Label>
                        <Form.Control
                            name="nombre1"
                            type="text"
                            value={formik.values.nombre1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese el nombre completo..."
                            isInvalid={!!formik.errors.nombre1 && formik.touched.nombre1}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.nombre1}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="correo1">
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control
                            name="correo1"
                            type="email"
                            value={formik.values.correo1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese el correo..."
                            isInvalid={!!formik.errors.correo1 && formik.touched.correo1}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.correo1}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="telefono1">
                        <Form.Label>Número telefónico:</Form.Label>
                        <Form.Control
                            name="telefono1"
                            type="number"
                            value={formik.values.telefono1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese el número..."
                            isInvalid={!!formik.errors.telefono1 && formik.touched.telefono1}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.telefono1}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <hr />
                    <h4>Referencia personal #2</h4>
                    <Form.Group controlId="nombre2">
                        <Form.Label>Nombre completo:</Form.Label>
                        <Form.Control
                            name="nombre2"
                            type="text"
                            value={formik.values.nombre2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese el nombre completo"
                            isInvalid={!!formik.errors.nombre2 && formik.touched.nombre2}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.nombre2}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="correo1">
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control
                            name="correo2"
                            type="email"
                            value={formik.values.correo2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese el correo..."
                            isInvalid={!!formik.errors.correo2 && formik.touched.correo2}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.correo2}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="telefono2">
                        <Form.Label>Número telefónico:</Form.Label>
                        <Form.Control
                            name="telefono2"
                            type="number"
                            value={formik.values.telefono2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese el número..."
                            isInvalid={!!formik.errors.telefono2 && formik.touched.telefono2}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.telefono2}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="button"onClick={() => navigate("/paso4")} style={{padding: '5px', marginTop: '10px', marginRight: '5px'}}>Anterior</Button>
                    <Button variant="primary" type="submit" style={{padding: '5px', marginTop: '10px'}}>Siguiente</Button>
                </Form>
            </Card>
        </div>
    );

};

export default Paso5;