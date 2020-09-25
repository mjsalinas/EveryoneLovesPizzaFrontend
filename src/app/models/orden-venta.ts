import { empleado } from 'src/app/models/empleado';
import { cliente } from './cliente';

export class OrdenVenta{
    id: Number;
    IdCliente: Number;
    Total: Number;
    Idencargado: Number;
    EstadoOrden: String;
    FechaOrden: Date;
    Cliente: cliente;
    Empleado: empleado;
}