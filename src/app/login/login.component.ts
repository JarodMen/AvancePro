import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit():void {
  }
  constructor(private router: Router) {}

  regresarAlMenu() {
    this.router.navigate(['/home']);
  }

  login(form:NgForm){
    const email=form.value.email
    const password= form.value.password
  }



}
