import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Navbar, Nav, Container, Card } from "react-bootstrap";

const Paso2 = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const selector = useSelector((state) => state);

    const validacionPaso2 = Yup.object({
        institucion: Yup.string().required('La institución es requerida'),
        carrera: Yup.string().required('La carrera es requerida'),
        fechaInicioCarrera: Yup.date().required('La fecha de inicio es requerida'),
        fechaFinCarrera: Yup.date()
            .required('La fecha de fin es requerida')            
            .min(Yup.ref('fechaInicioCarrera'),'La fecha de fin debe ser posterior o igual a la fecha de inicio'),
    });

    const formik = useFormik({
        initialValues: {
            institucion: selector.institucion,
            carrera: selector.carrera,
            fechaInicioCarrera: selector.fechaInicioCarrera,
            fechaFinCarrera: selector.fechaFinCarrera,
        },
        validationSchema: validacionPaso2,
        onSubmit: (values) => { 
            dispatch({ 
                type: "AGREGAR_DATOS", 
                payload: values
            });
            navigate("/paso3") }
    });

    return (
        <div>
                {/*<Navbar bg="red" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/paso1">Paso 1</Nav.Link>
                            <Nav.Link href="/paso3">Paso 3</Nav.Link>
                            <Nav.Link href="/Paso4">Paso 4</Nav.Link>
                            <Nav.Link href="/Paso5">Paso 5</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
    </Navbar>*/}

                <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Paso 2. Formación académica</h2>
            <Card style={{ width: '30rem', margin: '0 auto', padding: '10px', color: 'darkblack', fontFamily: 'arial', boxShadow: '5px 5px 5px black'}}>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="institucion">
                        <h3 style={{fontFamily: 'negrilla'}}>Ingrese todos los datos</h3>
                        <hr />
                        <Form.Label>Institución:</Form.Label>
                        <Form.Control
                        name="institucion"
                        type="text"
                        value={formik.values.institucion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la institución"
                        isInvalid={!!formik.errors.institucion && formik.touched.institucion}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formik.errors.institucion}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="carrera">
                        <Form.Label>Carrera:</Form.Label>
                        <Form.Control
                            name="carrera"
                            type="text"
                            value={formik.values.carrera}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese la carrera"
                            isInvalid={!!formik.errors.carrera && formik.touched.carrera}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.carrera}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="fechaInicioCarrera">
                        <Form.Label>Fecha de Inicio:</Form.Label>
                        <Form.Control
                            name="fechaInicioCarrera"
                            type="date"
                            value={formik.values.fechaInicioCarrera}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese la fecha de inicio"
                            isInvalid={!!formik.errors.fechaInicioCarrera && formik.touched.fechaInicioCarrera}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.fechaInicioCarrera}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="fechaFinCarrera">
                        <Form.Label>Fecha de Fin:</Form.Label>
                        <Form.Control
                            name="fechaFinCarrera"
                            type="date"
                            value={formik.values.fechaFinCarrera}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Ingrese la fecha de fin"
                            isInvalid={!!formik.errors.fechaFinCarrera && formik.touched.fechaFinCarrera}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.fechaFinCarrera}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="button"onClick={() => navigate("/paso1")} style={{padding: '5px', marginTop: '10px', marginRight: '5px'}}>Anterior</Button>
                    <Button variant="primary" type="submit" style={{padding: '5px', marginTop: '10px'}}>Siguiente</Button>
                    
                </Form>
            </Card>
        </div>
    );

};

export default Paso2;
