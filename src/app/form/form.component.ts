import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mioForm: FormGroup;




  constructor(private router: Router) {

    this.mioForm = new FormGroup({
                          
      nome       : new FormControl(),
      cognome    : new FormControl(),
      email      : new FormControl(),
      telefono   : new FormControl(),
      data       : new FormControl()

    });
   }


   messaggio(): void{
    if(this.mioForm.get('nome').valid && this.mioForm.get('cognome').valid  &&
    this.mioForm.get('email').valid  && this.mioForm.get('telefono').valid)
    {
      this.router.navigate(["login"])
  }
  else
  {
    alert("CONTROLLA IL FORM CHE HAI COMPILATO")
  }

   }

   home(): void{
    this.router.navigate(["homepage"])
   }
  



  ngOnInit()  {
    this.mioForm = new FormGroup({
      'nome': new FormControl('', [
        Validators.required, Validators.minLength(2),Validators.pattern("[A-Za-z]+$")]),
      'cognome': new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z]+$")]),
      'email': new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
        'telefono': new FormControl('', [
          Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern("^[0-9]+$")]),
          'data': new FormControl('', [
            Validators.required, Validators.minLength(2), Validators.pattern("^[0-9]+$") ])
      });
  }

  // ritorna il valore del campo del form
  get nome() { return this.mioForm.get('nome'); }

  get cognome() { return this.mioForm.get('cognome'); }

  get email() { return this.mioForm.get('email'); }

  get telefono() { return this.mioForm.get('telefono'); }

  get data() { return this.mioForm.get('data'); }

  




  getInfo() {
    console.log(this.mioForm.value);
  }
    
  }
  

  


