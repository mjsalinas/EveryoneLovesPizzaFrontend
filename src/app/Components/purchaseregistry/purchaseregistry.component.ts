import { Component, OnInit, HostBinding } from '@angular/core';

import { PurchaseRegistriesService } from '../../Services/purchase-registries.service';
import { ProveedoresService } from '../../Services/proveedores.service';
import { OrdenCompra } from 'src/app/models/purchase';
import { detalleOrden } from 'src/app/models/purchase';
import { proveedor } from 'src/app/models/proveedor';
import { NgForm } from '@angular/forms';
import {EmpleadosservicesService} from '../../Services/empleadosservices.service';
import { InsumosService } from '../../Services/insumos.service';

@Component({
  selector: 'app-purchaseregistry',
  templateUrl: './purchaseregistry.component.html',
  styleUrls: ['./purchaseregistry.component.css']
})
export class PurchaseregistryComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;

  showaddformDetalles: boolean = false;
  showeditformDetalles: boolean = false;

  purchasereg: any = [];
  
  puchasedetail: any = [];
  purchaseorder: any = [];
  allproveedores: any =[];
  allempleado: any = [];
  allInsumos: any = [];
  

  selectedPurchaceID: number;
  selectedOrderID: number;
  selectedProveedorID: number;
  

  //variablesdePsarOrden
  emailautorizando: string;
  idsumimo: number;
  orderIDPasar: number;
  
  
  

  constructor(public purchaseeegistryservice: PurchaseRegistriesService, public proveedoresservice: ProveedoresService, public servicioempleados: EmpleadosservicesService, public insumosservices: InsumosService ) { }

  ngOnInit(): void {
    this.getallproveedores();
    this.getallOrdenes();
    this.getallempleados();
    this.getallInsumos();
  }

  getallInsumos(){
    this.insumosservices.getInsumosAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allInsumos = res; 
      }
    )
  }

  getallempleados(){
    this.servicioempleados.getEmployeesAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allempleado = res;
      }
    )
  }

  getallproveedores(){

    this.proveedoresservice.getProveedoresAll().subscribe(
      res=>{
        console.log('res proveedor :>> ', res);
        this.allproveedores = res; 
      }
    )  
  }

  getallOrdenes(){
    this.purchaseeegistryservice.getOrdenComprasAll().subscribe(
      res=>{
        console.log('res ordenes :>> ', res);
        this.purchaseorder = res;
      }
    )
  }

 

  hiddeeditform(){
    this.showaddform= true;
    this.showedifform=false;

    this.purchaseeegistryservice.selectedPurchace = new OrdenCompra();

  }
  
  showeditform(){
    this.showaddform= false;
    this.showedifform=true;
  }

  showDetailleditform(){

    this.showaddformDetalles = false;
    this.showeditformDetalles = true;

    this.showaddform= false;
    this.showedifform=false;

  }
  showdetailAddform(){

    this.showaddformDetalles = true;
    this.showeditformDetalles = false;

    this.showaddform= false;
    this.showedifform=false;
  }

  EditdetailRegistry(){

  }

  pasasidProvedor(id: number){
   
    this.selectedProveedorID=id;
    console.log('prov ID :>> ', this.selectedProveedorID);
  }

  AddRegistroCompra(form: NgForm){
    
    

    this.purchaseeegistryservice.selectedPurchace.IDProveedor=this.selectedProveedorID;
    console.log('prov ID :>> ', this.selectedProveedorID);
    console.log('form :>> ', form.value);
    this.purchaseeegistryservice.savePurchaseRegistry(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )


  }

  EditRegistroCompra(form: NgForm){
    console.log('form de edit compra :>> ', form);
    this.purchaseeegistryservice.updatePurchase(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
      this. getallOrdenes();
      form.reset();

  }

  addtoOrdenForm(ord: OrdenCompra){
    this.purchaseeegistryservice.selectedPurchace = ord;
    this.orderIDPasar = ord.id;
  }

  deleteOrden(id: string, form: NgForm){
    this.purchaseeegistryservice.deletepurchase(id).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    this.getallOrdenes();
    form.reset();
  }

  pasarAutorizadopor(email: string){
    this.emailautorizando=email;
  }
  pasarIDUnsumo(id: number){
    this.idsumimo = id;
  }
  


   

}
