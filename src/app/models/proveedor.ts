export class proveedor {

    constructor(id=" ", name = " ", telefone = ' ', correo = ' '){
        this.id = id; 
        this.nombre = name;
        this.telefono = telefone;
        this.correo = correo;

    }
    
    id?: string;
    nombre?: string;
    telefono?: string;
    correo?: string;
}