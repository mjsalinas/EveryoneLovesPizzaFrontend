import { Component, OnInit, HostBinding } from '@angular/core';
import {insumo} from '../../models/insumo';
import { InsumosService } from '../../Services/insumos.service';
import {CategoriasService} from '../../Services/categorias.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insumosregistry',
  templateUrl: './insumosregistry.component.html',
  styleUrls: ['./insumosregistry.component.css']
})
export class InsumosregistryComponent implements OnInit {


  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;
  insumovacio: insumo;

  allinsumos: any = [];
  allcategories: any = [];

  constructor(public insumoservice: InsumosService, public categoryservices: CategoriasService ) { }

  ngOnInit(): void {

    this.getallinsumos();
    this.getallcategories();

  }

  getallinsumos(){
    this.insumoservice.getInsumosAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        
        this.allinsumos = res;
      }
    )
  }

  getallcategories(){
    this.categoryservices.getCategoriasAll().subscribe(
      res=>{
        
        this.allcategories = res;
      }
    )

  }

  hiddeeditform(){
    this.showaddform= true;
    this.showedifform=false;

    
   // this.insumoservice.selectedinsumo = this.insumovacio;
    
  }
  
  showeditform(){
    this.showaddform= false;
    this.showedifform=true;
    
  }

  Editinsumo(form: NgForm){
    console.log('form :>> ', form.value);
    this.insumoservice.updateInsumo(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    form.reset();

  }

  addtoform(insumo: insumo){
    this.insumoservice.selectedinsumo = insumo;
  }

  addnewinsumo(form2: NgForm){
    console.log('form :>> ', form2.value);
    this.insumoservice.saveNewInsumos(form2.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      },
      
    )
    form2.reset();
    
  }

  deleteinsumo(id: string, form3: NgForm){
    this.insumoservice.deleteInsumo(id).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )

    this.getallinsumos();
    form3.reset();
    
  }

}
