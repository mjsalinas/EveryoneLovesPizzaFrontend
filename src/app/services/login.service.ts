import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../config';
import { catchError, isEmpty, map } from 'rxjs/operators';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { LoginUser } from '../models/login.model';
import { isNullOrEmpty } from '../helpers/utils';
import { throwError } from 'rxjs';
// tslint:disable: typedef
const swal: SweetAlert = _swal as any;
@Injectable()
export class LoginService {
  constructor(public http: HttpClient) {}

  login(loginUser: LoginUser) {
    const url = URL_SERVICIOS + 'login';
    return this.http.post(url, loginUser).pipe(
      map((resp: any) => {
        localStorage.clear();
        localStorage.setItem(
          'Recuerdame',
          loginUser.Recuerdame ? loginUser.Recuerdame.toString() : ''
        );
        localStorage.setItem('token', resp.token);
        localStorage.setItem('Correo', resp.empleado.correo);
        localStorage.setItem('IsSuperAdmin', resp.empleado.isSuperAdmin);
        localStorage.setItem('Empleado', JSON.stringify(resp.empleado));
        console.log(localStorage);
        return true;
      })
    );
  }
}
