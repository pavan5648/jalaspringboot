import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private _http: HttpClient
  ) { }

  public categories() {
    return this._http.get(`${baseUrl}/emp`);
  }

  public employees(){
    return this._http.get(`${baseUrl}/emp`);
  }


}
