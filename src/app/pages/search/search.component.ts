import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, withPreloading } from '@angular/router';
import { window } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import baseUrl from 'src/app/services/helper';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  quizzes = [];
  categories = [];
  employees = null;
  employee = [];
  firstName = null;

  public searchData = {
    firstName: '',
    mobile: ''
  };

  

  constructor(
    private router: Router,
    private _category: SearchService,
    private _http: HttpClient,
    private _emp: SearchService
  ) { }

  ngOnInit(): void {

    this._http.get(`${baseUrl}/emp`).subscribe(
      (data: any) => {
        this.employees = data;
        this.employee = data;
        // this.firstName = data[8].firstName;
        // console.log(this.firstName)
        console.log(this.employees);
      },
      (error) => {
        console.log(error)
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )

  }



  dataa() {
    this._http.get(`${baseUrl}/emp`).subscribe(
      (data: any) => {
        this.employees = data;
        this.employee = data;
        // this.firstName = data[8].firstName;
        // console.log(this.firstName)
        console.log(this.employees);
      },
      (error) => {
        console.log(error)
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }

  deleteEmp(eId: any) {
    this._emp.deleteEmployee(eId).subscribe(
      (data) => {
        if (this.employee != null) {
          // this.employees = this.employees.filter((emp: { eId: any; })=> emp.eId != eId);
          this.employee = this.employee.filter((emp: { eId: any; }) => emp.eId != eId)
          // this.employees = this.employee;
        }
        Swal.fire('Success', 'Employee Deleted !', 'success');
        this.dataa();

      },
      (error) => {
        console.log(error)
        Swal.fire('Error !!', 'Error in deleting !', 'error');
      }
    )



    // alert(eId);
  }

  

  searchEmployee() {
    this._http.post(`${baseUrl}/search`, this.searchData).subscribe(
      (data: any) => {
        this.employees = data;
        // this.employee = data;
        console.log(data)
      },
      (error) => {
        console.log(error)
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }



}
