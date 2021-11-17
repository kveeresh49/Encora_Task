import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = environment.server;

  user:string = 'users';

  users: any[] =[];

  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
   }

  async getAllUsers() {
    this.users = await this.http
      .get<any[]>(this.url + this.user)
      .toPromise();
  }

  login(email: string, password: string) {
    return this.users.find(user => user.email === email);
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user')!);
    return of(user);
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
