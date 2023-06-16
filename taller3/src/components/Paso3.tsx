import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Navbar, Nav, Container, Card } from "react-bootstrap";

const Paso3 = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const selector = useSelector(state=>state);

    const validacionPaso3 = Yup.object({
        empresa: Yup.string().required('El nombre de la empresa es requerido'),
        puesto: Yup.string().required('El puesto es requerido'),
        fechaInicioEmpresa: Yup.date().required('La fecha de inicio es requerida'),
        fechaFin: Yup.date()
            .required('La fecha de fin es requerida')            
            .min(Yup.ref('fechaInicioEmpresa'),'La fecha de fin debe ser posterior o igual a la fecha de inicio'),
    });

    const formik = useFormik({
        initialValues: {
            empresa: selector.empresa,
            puesto: selector.puesto,
            fechaInicioEmpresa: selector.fechaInicioEmpresa,
            fechaFin: selector.fechaFin,
        },
        validationSchema: validacionPaso3,
        onSubmit: (values) => { 
            dispatch({ 
                type: "AGREGAR_DATOS", 
                payload: values
            });
            navigate("/paso4") }
    });

    return (
        <div>
            
                {/*
                
                <Navbar bg="red" expand="lg"> 
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/paso1">Paso 1</Nav.Link>
                            <Nav.Link href="/paso2">Paso 2</Nav.Link>
                            <Nav.Link href="/paso4">Paso 4</Nav.Link>
                            <Nav.Link href="/Paso5">Paso 5</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                */}
                

                <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Paso 3. Experiencia laboral</h2>
                <Card style={{ width: '30rem', margin: '0 auto', padding: '10px', color: 'darkblack', fontFamily: 'arial', boxShadow: '5px 5px 5px black'}}>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId="empresa">
                            <h3 style={{fontFamily: 'negrilla'}}>Ingrese todos los datos</h3>
                            <hr />
                            <Form.Label>Empresa:</Form.Label>
                            <Form.Control
                                name="empresa"
                                type="text"
                                value={formik.values.empresa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Ingrese la empresa en la que labora"
                                isInvalid={!!formik.errors.empresa && formik.touched.empresa}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.empresa}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="puesto">
                            <Form.Label>Puesto:</Form.Label>
                            <Form.Control
                                name="puesto"
                                type="text"
                                value={formik.values.puesto}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Ingrese el puesto que ocupa"
                                isInvalid={!!formik.errors.puesto && formik.touched.puesto}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.puesto}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="fechaInicioEmpresa">
                            <Form.Label>Fecha de Inicio:</Form.Label>
                            <Form.Control
                                name="fechaInicioEmpresa"
                                type="date"
                                value={formik.values.fechaInicioEmpresa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Ingrese la fecha de inicio"
                                isInvalid={!!formik.errors.fechaInicioEmpresa && formik.touched.fechaInicioEmpresa}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.fechaInicioEmpresa}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="fechaFin">
                            <Form.Label>Fecha de Fin:</Form.Label>
                            <Form.Control
                                name="fechaFin"
                                type="date"
                                value={formik.values.fechaFin}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Ingrese la fecha de fin"
                                isInvalid={!!formik.errors.fechaFin && formik.touched.fechaFin}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.fechaFin}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="button"onClick={() => navigate("/paso2")} style={{padding: '5px', marginTop: '10px', marginRight: '5px'}}>Anterior</Button>
                        <Button variant="primary" type="submit" style={{padding: '5px', marginTop: '10px'}}>Siguiente</Button>
                    </Form>
                </Card>
        </div>
    );

};

export default Paso3;
