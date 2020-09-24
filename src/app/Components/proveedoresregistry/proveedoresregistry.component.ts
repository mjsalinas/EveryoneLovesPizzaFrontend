import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { proveedor } from 'src/app/models/proveedor';

import {ProveedoresService} from '../../Services/proveedores.service';

declare var M: any;
@Component({
  selector: 'app-proveedoresregistry',
  templateUrl: './proveedoresregistry.component.html',
  styleUrls: ['./proveedoresregistry.component.css'],
  providers: [ProveedoresService]
})
export class ProveedoresregistryComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;

  allproveedores: any = [];
  oneproveedorSelected: any = [];
  selectedProveedorID: number;
  nombreproveedor1: string;

  constructor(public proveedoresservice: ProveedoresService) { }

  ngOnInit(): void {
    
    this.getallProveedore();

  }

  getallProveedore(){

    this.proveedoresservice.getProveedoresAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allproveedores = res;
      },
      err => console.log(err)
    )
  }

EditProveedor(form: NgForm){
   
     this.proveedoresservice.updateProvider(form.value).subscribe(
       res=>{
         console.log('res :>> ', res);
       }
     )
   }

AddNewProveedor(form: NgForm){
  console.log('form :>> ', form.value);
  this.proveedoresservice.saveNewProvider(form.value).subscribe(
    res=>{
      console.log('res :>> ', res);
    }
  )
  M.toast({html: 'Proveedor Agregado'})
  this.getallProveedore();
  form.reset();
}

  

hiddeeditform(){
  this.showaddform= true;
  this.showedifform=false;
  
}

showeditform(){
  this.showaddform= false;
  this.showedifform=true;
  
}

addtoform(provider: proveedor){
  this.proveedoresservice.selectedproveedor = provider;

}

deleteproveedor(form: NgForm, id: string){

  this.proveedoresservice.deleteprovider(id).subscribe(
    res=>console.log('res :>> ', res)
  )
  M.toast({html: 'Proveedor Eliminado'})
  this.getallProveedore();
  form.reset();
}
  


}
