import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-masters',
  templateUrl: './admin-masters.component.html',
  styleUrls: ['./admin-masters.component.css']
})
export class AdminMastersComponent implements OnInit {

  constructor(
    public router: Router,

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
}
