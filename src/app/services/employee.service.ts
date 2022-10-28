import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor( private http: HttpClient) { }


  public addEmployee(employee:any){
    return this.http.post(`${baseUrl}/emp`,employee)
  }



}
