import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  url:string = environment.server;

  company:string = 'companies';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get<any[]>(this.url + this.company)
      .toPromise();
  }
}
