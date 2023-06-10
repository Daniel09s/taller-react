import { configureStore } from "@reduxjs/toolkit";

const initialValue = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    institucion: "",
    carrera: "",
    fechaInicioCarrera: "",
    fechaFinCarrera: "",
    empresa: "",
    puesto: "",
    fechaInicioEmpresa: "",
    fechaFin: "",
    biografia: "",
    nombre1: "",
    correo1: "",
    telefono1: "",
    nombre2: "",
    correo2: "",
    telefono2: "",
};

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "AGREGAR_DATOS":
            return {...state, ...action.payload };
        default:
            return state;
    }
}

const store = configureStore({ reducer });

export default store;