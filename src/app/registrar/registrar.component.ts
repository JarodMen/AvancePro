import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  ngOnInit():void {
  }
  constructor(private router: Router) {}
  registrar(form:NgForm){
    const nombre=form.value.nombre
    const email=form.value.email
    const password= form.value.password
  }
  regresarAlMenu() {
    this.router.navigate(['/home']);
  }
}
