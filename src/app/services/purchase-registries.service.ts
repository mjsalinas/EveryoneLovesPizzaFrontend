import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenCompra } from '../models/purchase';
import { detalleOrden } from '../models/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRegistriesService {

  API_URI = 'https://localhost:44342/api';
  selectedPurchace: OrdenCompra;
  selectedPurchacedetail: detalleOrden;
  

  constructor(private http: HttpClient) { 
    this.selectedPurchace =  new OrdenCompra();
    this.selectedPurchacedetail =  new detalleOrden();
  }


  getDetalleComprasAll(){
    return this.http.get(`${this.API_URI}/detallecompras`)
  }
  getOrdenComprasAll(){
    return this.http.get(`${this.API_URI}/OrdenCompras`)
  }

  getDetalleCompraID(id: string){
    return this.http.get(`${this.API_URI}/detallecompras/${id}`);
  }
  getOrdenCompraID(id: string){
    return this.http.get(`${this.API_URI}/OrdenCompras/${id}`);
  }



  deletepurchase(id: string){
    return this.http.delete(`${this.API_URI}/OrdenCompras/${id}`);
  }
  deletepurchasedetail(id: string){
    return this.http.delete(`${this.API_URI}/detallecompras/${id}`);
  }


  savePurchaseRegistry(Purchase: OrdenCompra){
    return this.http.post(`${this.API_URI}/OrdenCompras/`, Purchase);
  }
  savePurchaseDetail(detalle: detalleOrden){
    return this.http.post(`${this.API_URI}/detallecompras/`, detalle);
  }


  updatePurchase(updatedpurchase: OrdenCompra): Observable<OrdenCompra> {
    return this.http.put(`${this.API_URI}/OrdenCompras/${updatedpurchase.id}`, updatedpurchase)
  }
  updatePurchasedetail(updatedpurchasedetail: detalleOrden): Observable<detalleOrden> {
    return this.http.put(`${this.API_URI}/detallecompras/${updatedpurchasedetail.id}`, updatedpurchasedetail)
  }

  
}
