import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  url:string = environment.server;

  contacts:string = 'contacts';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get<any[]>(this.url + this.contacts)
      .toPromise();
  }
}
