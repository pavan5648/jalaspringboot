import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private employeeServie: EmployeeService,
    private snack: MatSnackBar,
    private router: Router
  ) { }


    // creating object of employee
  public employee = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    city: '',
    gender: '',
    dateOfBirth: '',
    mobile: '',
    aws: '',
    devOps: '',
    fullStackDeveloper: '',
    middleware: '',
    webServices: '',
    qaAutomation: '',
  }

  ngOnInit(): void {
  }

  // create employee method => called after click on save 
  createEmployee() {


    if (this.employee.firstName == '' || this.employee.firstName == null) {
      // alert('User is required !!');
      this.snack.open('First Name is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.employee.lastName == '' || this.employee.lastName == null) {
      // alert('User is required !!');
      this.snack.open('Last Name is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.employee.email == '' || this.employee.email == null) {
      // alert('User is required !!');
      this.snack.open('Email is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.employee.mobile == '' || this.employee.mobile == null) {
      // alert('User is required !!');
      this.snack.open('Mobile is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    // alert('submit')
    console.log(this.employee);
    // posting data to server 
    this.employeeServie.addEmployee(this.employee).subscribe(
      (data) => {
        //success
        console.log(data)
        Swal.fire('Success', 'employee added', 'success');
        this.router.navigate(['dashboard/search']);
      },
      (error) => {
        // error
        this.snack.open(error.error.message, '', {
          duration: 3000,
        });
        console.log(error);
      }
    )

  }

}
