import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function FinApp() {

    const Navigate = useNavigate();

  const nuevoForm = (e) => {
    e.preventDefault();
    Navigate("/paso1");    
}

  return (
    <>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Todos los datos han sido enviados!</h1>
        <Button style={{ width: '20rem', marginTop: '10px', justifyContent: 'center', padding: '10px', color: 'darkblack', fontFamily: 'arial', boxShadow: '5px 5px 5px black', display: 'flex'}} onClick={nuevoForm}  variant="primary"> 
          Nuevo formulario
        </Button>
    </>
  );
}

export default FinApp;