import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMastersComponent } from './admin-masters/admin-masters.component';
import { EmployeeGuard } from './guards/empleado.guard';
import { SuperAdminGuard } from './guards/superadmin.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { UserComponent } from './user/user.component';
  
import { FormsModule } from '@angular/forms';

import { PurchaseregistryComponent } from './Components/purchaseregistry/purchaseregistry.component';
import { InsumosregistryComponent } from './Components/insumosregistry/insumosregistry.component';
import { ProveedoresregistryComponent } from './Components/proveedoresregistry/proveedoresregistry.component';
import { CategoriesregistriesComponent } from './Components/categoriesregistries/categoriesregistries.component';
import { InvetarioregistriesComponent } from './Components/invetarioregistries/invetarioregistries.component';
import { MasterNavitationSuperadminComponent } from './Components/master-navitation-superadmin/master-navitation-superadmin.component';
import { MasterNavigationComponent } from './Components/master-navigation/master-navigation.component';
import { EmpleadosRegistriesComponent } from './Components/empleados-registries/empleados-registries.component';
import { ClientesRegistriesComponent } from './Components/clientes-registries/clientes-registries.component';

const routes: Routes = [
  { path: 'employee', component: UserComponent },
  { path: 'home', component: HomepageComponent },
  {
    path: 'admin',
    redirectTo:  'navigation-admin',
    pathMatch: 'full'
  },
  {
    path: 'superAdmin',
    redirectTo:  'navigation-superadmin',
    pathMatch: 'full'
  },
  {
    path: 'navigation-admin',
    component: MasterNavigationComponent,
    children: [
      {path: 'purchase-registry', component: PurchaseregistryComponent},
      {path: 'insumosregistry', component: InsumosregistryComponent},
      {path: 'proveedoresregistry', component: ProveedoresregistryComponent,},
      {path: 'categoriesregistry',component: CategoriesregistriesComponent},
      {path: 'invetarioregistry', component: InvetarioregistriesComponent},
     ],
     canActivate: [EmployeeGuard],
  },
  {
    path: 'navigation-superadmin',
    component: MasterNavitationSuperadminComponent,
    children: [
      {path: 'empleadosregistries-sa', component: EmpleadosRegistriesComponent},
      {path: 'clientesregiestries-sa', component: ClientesRegistriesComponent}
    ],
    canActivate: [SuperAdminGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard', component: SuperAdminDashboardComponent
  }
 
];

@NgModule({
  imports: [  FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
