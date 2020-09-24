import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proveedor } from '../models/proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  API_URI = 'https://localhost:44342/api';
  selectedproveedor: proveedor;
  proveedores: proveedor[];

  constructor(private http: HttpClient) {
    this.selectedproveedor = new proveedor();

   }

    getProveedoresAll(){
      return this.http.get(`${this.API_URI}/Proveedors`)
    }
  
    getProveedoresID(id: string){
      return this.http.get(`${this.API_URI}/Proveedors/${id}`);
    }

    saveNewProvider(Provider: proveedor){
      return this.http.post(`${this.API_URI}/Proveedors/`, Provider);
    }
    updateProvider(updateprovider: proveedor): Observable<proveedor> {
      return this.http.put(`${this.API_URI}/Proveedors/${updateprovider.id}`, updateprovider)
    }

    deleteprovider(id: string){
      return this.http.delete(`${this.API_URI}/Proveedors/${id}`);
    }
}
