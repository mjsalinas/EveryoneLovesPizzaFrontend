import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { empleado } from "../models/empleado";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosservicesService {

  API_URI = 'https://localhost:44342/api';
  selectedemployee: empleado;

  constructor(private http: HttpClient) {
    this.selectedemployee = new empleado();
   }

   getEmployeesAll(){
    return this.http.get(`${this.API_URI}/Empleados`)
  }

  getEmployeesID(id: string){
    return this.http.get(`${this.API_URI}/Empleados/${id}`);
  }

  getAllEmployees(){
    return this.http.get<empleado>(this.API_URI + '/empleados/getTotalEmployees');
  }

  saveNewEmployee(employee: empleado){
    return this.http.post(`${this.API_URI}/Empleados/`, employee);
  }
  updateEmployee(employee: empleado): Observable<empleado> {
    return this.http.put(`${this.API_URI}/Empleados/${employee.id}`, employee)
  }

  deleteEmployee(id: string){
    return this.http.delete(`${this.API_URI}/Empleados/${id}`);
  }
}
