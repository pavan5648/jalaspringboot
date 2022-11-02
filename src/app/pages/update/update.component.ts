import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _search: SearchService
  ) { }

  eId = undefined;

  emp: any;
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
    this.eId = this._route.snapshot.params['eId'];
    // alert(this.eId)

    this._search.sindleEmployee(this.eId).subscribe(
      (data: any) => {
        this.emp = data;
        console.log(this.emp)
      },
      (error) => {
        console.log(error)
      }
    )

  }

  public updateData() {
    // alert("test")
    this._search.updateEmployee(this.emp).subscribe(
      (data) => {
        Swal.fire('Success', 'Data Updated !', 'success');
        this.router.navigate(['dashboard/search']);
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
