import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import { map } from 'rxjs/operators';
import { SweetAlert } from 'sweetalert/typings/core';
import { isNullOrEmpty } from '../helpers/utils';
import { LoginUser } from '../models/login.model';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
// tslint:disable: typedef
// tslint:disable: variable-name
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  usuarios: User[] = [];
  loginUser: LoginUser;
  email: string;
  recuerdame = false;

  constructor(
    public router: Router,
    public _usuarioService: UserService,
    public _loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginUser = new LoginUser();
    console.log(localStorage);
    // this._usuarioService.cargarUsuarios().subscribe((resp: any) => {
    //   this.usuarios = resp;
    // });
  }
  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    const usuario = new User(
      null,
      null,
      forma.value.Correo,
      forma.value.Contraseña,
      null,
      null
    );
    this.loginUser.Correo = forma.value.Correo;
    this.loginUser.Contraseña = forma.value.Contraseña;

    this._loginService.login(this.loginUser).subscribe(
      (resp: any) => {
        swal('Usuario logeado Correctamente', '', 'success');
        this.router.navigate(['/superAdmin']);
      },
      (error) => {
        swal(error.error.message, '', 'error');
      }
    );
  }
  registrar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    const usuario = new User(
      forma.value.Nombre,
      forma.value.Apellido,
      forma.value.Correo,
      forma.value.Contraseña,
      forma.value.Telefono,
      forma.value.Direccion
    );
    this._usuarioService.crearUsuario(usuario).subscribe((resp: any) => {
      console.log(resp);
    });
  }
  salir() {
    // if (localStorage.getItem('IsSuperAdmin') === 'true') {
    // } else if (localStorage.getItem('IsSuperAdmin') === 'false') {
    //   this.router.navigate(['/admin']);
    // }
    localStorage.clear();
    this.router.navigate(['/user']);
  }
}
