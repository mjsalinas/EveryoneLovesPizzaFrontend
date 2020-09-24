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
export class EmployeeGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const accessToken = localStorage.getItem('token');
    // if (!accessToken) {
    //   localStorage.dispatch(this.router.navigate(['/home']));
    //   return false;
    // }
    // if ('true' === localStorage.getItem('IsSuperAdmin')) {
    //   this.router.navigate(['/superAdmin']);
    //   console.log('IsSuperAdmin');
    //   return;
    // }
    if ('false' === localStorage.getItem('IsSuperAdmin')) {
      // this.router.navigate(['/admin']);
      return true;
    }   else {
      this.router.navigate(['/user']);
    }
  }
}
