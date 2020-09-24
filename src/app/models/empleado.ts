export class empleado{


    constructor(id=" ", nombre=" ", apellido=" ", contrasenia=" ",correo=" ",idfuncion=0, telefono=" ", status=" ",isSuperAdmin=0){
        this.id = id;
        this.nombre =  nombre;
        this.apellido = apellido;
        this.contrasenia = contrasenia;
        this.correo = correo;
        this.idFuncion = idfuncion;
        this.telefono = telefono;
        this.status = status;
        this.isSuperAdmin = isSuperAdmin;
    }

    id?: string;
    nombre?: string;
    apellido?: string;
    contrasenia?: string;
    correo?: string;
    idFuncion?: number;
    telefono?: string;
    status?: string;
    isSuperAdmin?: number; 


}