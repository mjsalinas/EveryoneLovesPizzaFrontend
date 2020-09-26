import { cliente } from './../../models/cliente';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  clientes: cliente[];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this.clientsService.getClientesAll().subscribe(data => {
      this.clientes = data;
    })
  }

}
