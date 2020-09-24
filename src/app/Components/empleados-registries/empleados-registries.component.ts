import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empleado } from 'src/app/models/empleado';



import { EmpleadosservicesService } from "../../Services/empleadosservices.service";
declare var M: any;
@Component({
  selector: 'app-empleados-registries',
  templateUrl: './empleados-registries.component.html',
  styleUrls: ['./empleados-registries.component.css']
})
export class EmpleadosRegistriesComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;

  allemployees: any = [];
  
  constructor(public employeeserv: EmpleadosservicesService) { }

  ngOnInit(): void {
    this. getallEmployees();
  }

  getallEmployees(){
    this.employeeserv.getEmployeesAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allemployees = res;
      }
    )
  }

  EditEmployee(form: NgForm){
    console.log('form.value :>> ', form.value);
    this.employeeserv.updateEmployee(form.value).subscribe(
      res=>{
        
        console.log('res :>> ', res);
      }
    )

    this.getallEmployees();
    form.reset();
  }

  AddNewEmp(form: NgForm){
    this.employeeserv.saveNewEmployee(form.value).subscribe(
      res=>{
        console.log('res :>> ', res);
      }
    )
    M.toast({html: 'Empleado Agregado'})
    this.getallEmployees();
    form.reset();


  }

  addtoform(emps: empleado){
    this.employeeserv.selectedemployee = emps;
    console.log('emps :>> ', emps);
  }

  hiddeeditform(){
    this.showaddform= true;
    this.showedifform=false;
    
  }
  
  showeditform(){
    this.showaddform= false;
    this.showedifform=true;
    
  }

  deleteempleado(form: NgForm, id: string){
    this.employeeserv.deleteEmployee(id).subscribe(
      res=>{
        console.log('res :>> ', res);
      },
      err=>{
        M.toast({html: err})
      }
    )
    this.getallEmployees();
    form.reset();

   }

}
