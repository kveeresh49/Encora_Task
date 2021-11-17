import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(){
    return new Observable<boolean>((subscriptor) => {
      let user = JSON.parse(localStorage.getItem("user")!);
      console.log(user);
      if(!user){
        this.router.navigate(['/login'])
        subscriptor.next(false);
      }else{
        subscriptor.next(true);
      }
    });
  }
}
