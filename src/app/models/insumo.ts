export class insumo{

    
    constructor( id=0, nombres=" ", idcategoria=0, descripcion=" ",unidadmedidaventa=" ", precioventa=0, fechacaducidad= new Date("2015-03-25") ,unidadMedidaAlmacenamiento=" " ){

        this.id=id;
        this.nombres = nombres;
        this.idcategoria= idcategoria;
        this.descripcion = descripcion;
        this.UnidadMedidaVenta = unidadmedidaventa;
        this.PrecioVenta = precioventa;
        this.fechacaducidad = fechacaducidad;
        this.unidadMedidaAlmacenamiento= unidadMedidaAlmacenamiento

    }

    id?: number;
    nombres?: string;
    idcategoria?: number;
    descripcion?: string;
    UnidadMedidaVenta?: string;
    PrecioVenta?: number;
    fechacaducidad?: Date = new Date("2020/09/22");
    unidadMedidaAlmacenamiento?: string;

}