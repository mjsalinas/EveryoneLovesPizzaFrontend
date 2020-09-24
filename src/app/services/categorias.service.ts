import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categorias } from '../models/categorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  API_URI = 'https://localhost:44342/api';
  selectedcategory: categorias;
  categorias: categorias[];

  constructor(private http: HttpClient) {
    this.selectedcategory = new categorias();
   }

   getCategoriasAll(){
    return this.http.get(`${this.API_URI}/Categorias`)
  }

  getCategoriasID(id: string){
    return this.http.get(`${this.API_URI}/Categorias/${id}`);
  }

  saveNewCategorias(category: categorias){
    return this.http.post(`${this.API_URI}/Categorias/`, category);
  }
  updateCategorias(category: categorias): Observable<categorias> {
    return this.http.put(`${this.API_URI}/Categorias/${category.id}`, category)
  }

  deleteCategorias(id: string){
    return this.http.delete(`${this.API_URI}/Categorias/${id}`);
  }
  
}
