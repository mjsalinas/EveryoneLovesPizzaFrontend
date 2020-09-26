import { PurchaseRegistriesService } from './../services/purchase-registries.service';
import { EmpleadosservicesService } from './../services/empleadosservices.service';
import { OrdenVentaService } from './../services/orden-venta.service';
import { ClientsService } from './../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {

  clientestotales;
  ordenestotales;
  compras;
  empleados;

  constructor(
    public router: Router,
    public clientesService: ClientsService,
    public ordenVentaService: OrdenVentaService,
    public empleadoService: EmpleadosservicesService,
    public purchaseService: PurchaseRegistriesService

  ) { }

  ngOnInit() {
    this.obtenerOrdenes();
    this.obtenerClientes();
    this.obtenerEmpleados();
    this.obtenerComprasTotales();
  }
  // salir() {
  //   // if (localStorage.getItem('IsSuperAdmin') === 'true') {
  //   // } else if (localStorage.getItem('IsSuperAdmin') === 'false') {
  //   //   this.router.navigate(['/admin']);
  //   // }
  //   localStorage.clear();
  //   this.router.navigate(['/user']);
  // }

  obtenerClientes(){
    this.clientesService.getTotalClients().subscribe(data => {
      this.clientestotales = data;
    })
  }

  obtenerOrdenes(){
    this.ordenVentaService.getOrders().subscribe(data => {
      this.ordenestotales = data;
    })
  }

  obtenerEmpleados(){
    this.empleadoService.getAllEmployees().subscribe(data => {
      this.empleados = data;
    })
  }

  obtenerComprasTotales(){
    this.purchaseService.getTotalCompras().subscribe(data => {
      this.compras = data;
    })
  }
}
