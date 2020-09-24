import { Injectable } from '@angular/core';
import { inventario } from "../models/inventario";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  API_URI = 'https://localhost:44342/api';
  selectedinventario: inventario;
  
  constructor(private http: HttpClient) {
    this.selectedinventario = new inventario();
   }

   getinventariosAll(){
    return this.http.get(`${this.API_URI}/inventarios`)
  }

  getinventariosID(id: string){
    return this.http.get(`${this.API_URI}/inventarios/${id}`);
  }

  saveNewinventarios(stock: inventario){
    return this.http.post(`${this.API_URI}/inventarios/`, stock);
  }
  updateinventarios(stock: inventario): Observable<inventario> {
    return this.http.put(`${this.API_URI}/inventarios/${stock.id}`, stock)
  }

  deleteinventarios(id: string){
    return this.http.delete(`${this.API_URI}/inventarios/${id}`);
  }


}
