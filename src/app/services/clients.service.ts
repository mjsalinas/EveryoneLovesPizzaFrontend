import { Injectable } from '@angular/core';
import { cliente } from "../models/cliente";
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = 'https://localhost:44342/api';
  selectedclient: cliente;

  constructor(private http: HttpClient) {
    this.selectedclient = new cliente();
   }

   getClientesAll(){
    return this.http.get(`${this.API_URI}/clientes`)
  }

  getClientesID(id: string){
    return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  saveNewClient(client: cliente){
    return this.http.post(`${this.API_URI}/clientes/`, client);
  }
  updateClient(client: cliente): Observable<cliente> {
    return this.http.put(`${this.API_URI}/clientes/${client.id}`, client)
  }

  deleteClient(id: string){
    return this.http.delete(`${this.API_URI}/clientes/${id}`);
  }

}
