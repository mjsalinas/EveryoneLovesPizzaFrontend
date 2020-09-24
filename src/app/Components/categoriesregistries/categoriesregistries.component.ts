import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { categorias } from 'src/app/models/categorias';
import { CategoriasService } from '../../Services/categorias.service';

@Component({
  selector: 'app-categoriesregistries',
  templateUrl: './categoriesregistries.component.html',
  styleUrls: ['./categoriesregistries.component.css']
})
export class CategoriesregistriesComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;

  allcategorias: any = [];

  constructor(public catservices: CategoriasService) { }

  ngOnInit(): void {
    this.getallcategorias();
  }

  getallcategorias(){
    this.catservices.getCategoriasAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allcategorias = res;
      }
    )
  }

  EditCategorias(form: NgForm){

    this.catservices.updateCategorias(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
    form.reset();
    this.getallcategorias();
  }


  addtoform(categoria: categorias){
    this.catservices.selectedcategory = categoria;
  }

  hiddeeditform(){
    this.showaddform= true;
    this.showedifform=false;
    
  }
  
  showeditform(){
    this.showaddform= false;
    this.showedifform=true;
    
  }

  deletecategory(form: NgForm, id: string){
    this.catservices.deleteCategorias(id).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
    
    form.reset();
    this.getallcategorias();

  }

  addnewCategorias(form: NgForm){
   console.log('form :>> ', form.value);
    this.catservices.saveNewCategorias(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
    form.reset();
    this.getallcategorias();
  }

}
