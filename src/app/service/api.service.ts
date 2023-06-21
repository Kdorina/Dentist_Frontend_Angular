import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  host = "http://localhost:8000/api/";

  store(resData:any ){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOption= {
      headers:headers
    }
    let endpoint = "foglalas";
    let url = this.host  + endpoint;
    return this.http.post<any>(url, resData,httpOption)

}
}
