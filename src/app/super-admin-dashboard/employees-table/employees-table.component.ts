import { empleado } from 'src/app/models/empleado';
import { EmpleadosservicesService } from './../../services/empleadosservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {

  empleados: empleado[];

  constructor(private empleadoService: EmpleadosservicesService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadoService.getEmployeesAll().subscribe(data => {
      this.empleados = data;
    })
  }

}
