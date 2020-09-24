import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { URL_SERVICIOS } from '../config';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { LoginUser } from '../models/login.model';

const swal: SweetAlert = _swal as any;
// tslint:disable: typedef
// tslint:disable: prefer-const

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usuario: User;
  token: string;
  rol: string;
  list: User[];
  constructor(private http: HttpClient, public router: Router) {}
  // tslint:disable: use-lifecycle-interface
  // tslint:disable: contextual-lifecycle
  ngOnInit() {
    this.token = localStorage.getItem('Token');
  }
  estaLogueado() {
    return this.token.length > 5 ? true : false;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.clear();
  }

  crearUsuario(usuario: User) {
    let url = URL_SERVICIOS + 'Clientes';
    let response = this.http.post(url, usuario);
    return this.http.post(url, usuario).pipe(
      map((resp) => {
        swal('Usuario Creado Correctamente', usuario.Correo, 'success');
      })
    );
  }
  cargarUsuarios() {
    let url = URL_SERVICIOS + 'Empleados';
    return this.http.get(url);
  }
}
