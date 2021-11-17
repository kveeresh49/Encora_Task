import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(){
    return new Observable<boolean>((subscriptor) => {
      let user = JSON.parse(localStorage.getItem("user")!);
      console.log(user);
      if(!user){
        subscriptor.next(true);
      }else{
        this.router.navigate(['/main']);
        subscriptor.next(false);
      }
    });
  }

}
