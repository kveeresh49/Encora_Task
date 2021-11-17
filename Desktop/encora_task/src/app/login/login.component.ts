import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: UserService
  ) {
  }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.formGroup = this.formBuilder.group({
      username: [
        'rahul@gmail.com',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['123456', [Validators.required]],
    });
  }

  async logIn() {
    if (this.formGroup.valid) {
      const user = this.authService.login(this.username?.value, this.password?.value);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.route.navigate(['/main']);
      }else{
        alert('Login failed');
      }
    } else {
      alert('Set Any Data');
    }
  }

  get username() {
    return this.formGroup.get('username');
  }

  get password() {
    return this.formGroup.get('password');
  }
}
