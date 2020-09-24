import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventarioService } from '../../Services/inventario.service';
import { inventario } from "../../models/inventario";
import { InsumosService } from 'src/app/Services/insumos.service';


declare var M: any;
@Component({
  selector: 'app-invetarioregistries',
  templateUrl: './invetarioregistries.component.html',
  styleUrls: ['./invetarioregistries.component.css']
})
export class InvetarioregistriesComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;


  allinventarios: any = [];
  allinsumos: any = [];
  selectecStock: any;
  stock1: inventario;
  idFuncionPasarForm2: string;
  idpasarInsumoNewInventario: number;
  idstock: number;
  cantididadStk: number;

  constructor(public serviciosInventario: InventarioService, public insumosservice: InsumosService) { }

  ngOnInit(): void {
    this.getallinventario();
    this.getallinsumos();
    
  }

  getallinventario(){
    this.serviciosInventario.getinventariosAll().subscribe(
      res=>{
        console.log('res inventario :>> ', res);
        this.allinventarios = res;
      }
    )  
  }

  getallinsumos(){
    this.insumosservice.getInsumosAll().subscribe(
      res=>{
        console.log('res insumos :>> ', res);
        this.allinsumos = res;
      }
    )

  }

  
  hiddeeditform(){
    this.showaddform= true;
    this.showedifform=false;
    
  }
  
  showeditform(){
    this.showaddform= false;
    this.showedifform=true;
    
  }

  deleteinventario(id: string, form: NgForm){
    this.serviciosInventario.deleteinventarios(id).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
      this.getallinventario();
    form.reset();

  }

  EditInventario(form: NgForm){
     
    this.serviciosInventario.selectedinventario.idinsummos = this.idpasarInsumoNewInventario;
   
    
    console.log('Inventario que estoy mandando :>> ', this.serviciosInventario.selectedinventario);

    this.serviciosInventario.updateinventarios(this.serviciosInventario.selectedinventario).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    this.getallinventario();
    form.reset();
  }

  pasarIDParaForm2(stock1, idFuncionPasarForm2){
    this.insumosservice.getInsumosID(idFuncionPasarForm2).subscribe(
      res=>{
        console.log('res :>> ', res);
        this.selectecStock = res;
      }
    )

    this.serviciosInventario.selectedinventario = stock1;

  }

  addInsumoID(idInsumo: number){
    console.log('idInsumo :>> ', idInsumo);
    this.idpasarInsumoNewInventario=idInsumo;
    this.serviciosInventario.selectedinventario.idinsummos = this.idpasarInsumoNewInventario;
  }

  addnewInventario(form: NgForm){
   
    console.log('form.value :>> ', form.value);
    this.serviciosInventario.saveNewinventarios(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    this.getallinventario();
    form.reset();

  }


}
