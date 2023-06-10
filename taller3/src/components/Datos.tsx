export default class Persona { 

    nombre1 : string;
    correo1: string;
    telefono1: number;
    nombre2: string;
    correo2: string;
    telefono2: number;

    constructor(nombre1: string,correo1: string, telefono1: number, nombre2: string, correo2: string, telefono2: number){
        this.nombre1 = nombre1;
        this.correo1 = correo1;
        this.telefono1 = telefono1;
        this.nombre2 = nombre2;
        this.correo2 = correo2;
        this.telefono2 = telefono2;
    }

}