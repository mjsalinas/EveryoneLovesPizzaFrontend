export class OrdenCompra {
    
    constructor(id=0, idproveedor=0, fechacompra=" ", fechaingreso=" "){

        this.id=id;
        this.IDProveedor = idproveedor;
        this.fechacompra = fechacompra;
        this.fechaIngreso = fechaingreso;
    }
    
    id?: number;
    IDProveedor? : number;
    fechacompra?: string;
    fechaIngreso?: string;
    
}

export class detalleOrden {

    constructor(id=0, IDOrdenCompra=0, IDInsumo=0,PrecioUnitario=0,unidadMed=" ", totalfacturado=0, autorizadopor=" "){
        this.id=id;
        this.IDOrdenCompra=IDOrdenCompra;
        this.IDInsumo = IDInsumo;
        this.PrecioUnitario=PrecioUnitario;
        this.unidadMed = unidadMed;
        this.totalfacturado =  totalfacturado;
        this.autorizadopor = autorizadopor;       
    }

    id?: number;
    IDOrdenCompra? : number;
    IDInsumo?: number;
    PrecioUnitario?: number;
    unidadMed?: string;
    totalfacturado?: number;
    autorizadopor?: string;

}