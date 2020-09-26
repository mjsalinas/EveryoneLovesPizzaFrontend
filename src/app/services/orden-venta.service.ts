import { OrdenVenta } from './../models/orden-venta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenVentaService {

  orden: OrdenVenta[];
  
  API_URI = 'https://localhost:44342/api/ordenventas';

  constructor(private http: HttpClient) { }


  getOrders(){
    return this.http.get<OrdenVenta[]>(this.API_URI + "/gettotalorders");
  }

  
}
