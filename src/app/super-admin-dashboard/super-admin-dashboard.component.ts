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

  constructor(
    public router: Router,
    public clientesService: ClientsService

  ) { }

  ngOnInit(): void {
  }
  salir() {
    // if (localStorage.getItem('IsSuperAdmin') === 'true') {
    // } else if (localStorage.getItem('IsSuperAdmin') === 'false') {
    //   this.router.navigate(['/admin']);
    // }
    localStorage.clear();
    this.router.navigate(['/user']);
  }

  obtenerClientes(){
    this.clientesService.getTotalClients().subscribe(data => {
      this.clientestotales = data;
    })
  }
}
