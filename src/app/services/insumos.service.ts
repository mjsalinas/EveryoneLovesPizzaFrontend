import { Injectable } from '@angular/core';
import { insumo } from '../models/insumo';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  API_URI = 'https://localhost:44342/api';
  selectedinsumo: insumo;

  constructor(private http: HttpClient) {
    this.selectedinsumo =  new insumo();
   }

   getInsumosAll(){
    return this.http.get(`${this.API_URI}/insumos`)
  }

  getInsumosID(id: string){
    return this.http.get(`${this.API_URI}/insumos/${id}`);
  }

  saveNewInsumos(insumo: insumo){
    return this.http.post(`${this.API_URI}/insumos`, insumo);
  }
  updateInsumo(insumo: insumo): Observable<insumo> {
    return this.http.put(`${this.API_URI}/insumos/${insumo.id}`, insumo)
  }

  deleteInsumo(id: string){
    return this.http.delete(`${this.API_URI}/insumos/${id}`);
  }
}
