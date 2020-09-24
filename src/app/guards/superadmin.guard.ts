import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class SuperAdminGuard implements CanActivate {
  constructor(
    // public _usuarioService: UserService,
    // public auth: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const accessToken = localStorage.getItem('token');

    if ('true' === localStorage.getItem('IsSuperAdmin')) {
      return true;
    } else if ('false' === localStorage.getItem('IsSuperAdmin')) {
      this.router.navigate(['/admin']);
    }
    else {
      this.router.navigate(['/user']);
    }
  }
}
