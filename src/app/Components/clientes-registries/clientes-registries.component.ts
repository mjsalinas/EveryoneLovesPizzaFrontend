import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cliente } from "../../models/cliente";
import {ClientsService} from "../../Services/clients.service";

declare var M: any;
@Component({
  selector: 'app-clientes-registries',
  templateUrl: './clientes-registries.component.html',
  styleUrls: ['./clientes-registries.component.css']
})
export class ClientesRegistriesComponent implements OnInit {


  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;

  allclients: any = [];

  constructor(public clientservices: ClientsService) { }

  ngOnInit(): void {
    this.getallclients();
  }
  getallclients(){
    this.clientservices.getClientesAll().subscribe(
      res=>{
       this.allclients = res;
      }
    )
  }

  EditClient(form: NgForm){
    this.clientservices.updateClient(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    this.getallclients();
    form.reset();

  }


  AddnewClient(form: NgForm){
    this.clientservices.saveNewClient(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
    this.getallclients();
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

  addtoform(client: cliente){
    this.clientservices.selectedclient = client;
  }

  deleteclient(form: NgForm, id: string){
    this.clientservices.deleteClient(id).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    this.getallclients();
    form.reset();

  }
  

}
