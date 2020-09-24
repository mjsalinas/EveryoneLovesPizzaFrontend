export class cliente{

    constructor(id=" ", nombre=" ", apellido=" ", contrasenia=" ", correo=" ", telefono= 0, direccion=" "){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasenia = contrasenia;
        this.correo = correo;
        this.telefono =  telefono;
        this.direccion = direccion;

    }

    id?: string;
    nombre?: string;
    apellido?: string;
    contrasenia?: string;
    correo?: string;
    telefono?: number;
    direccion?: string;

}