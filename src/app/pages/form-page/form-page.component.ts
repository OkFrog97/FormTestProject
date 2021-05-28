import { Component, OnInit } from '@angular/core';
import {IAuthRequest, ILoginForm} from "./type";
import { faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit, ILoginForm {
  public readonly formTitle = 'sign in';
  public readonly loginTitle = 'login';
  public readonly passwordTitle = 'password';
  public readonly errorText = 'Error text.';
  public readonly submitTitle = 'Submit';
  public readonly faTimesCircle1 = faTimesCircle;
  public readonly authForm: FormGroup = new FormGroup({
     'login': new FormControl('', Validators.required),
     'password': new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

   public checkPassword () {
    return this.authForm.controls['password'].invalid && this.authForm.controls['password'].touched;
   }

   public isSubmitDisabled() {
    return this.authForm.invalid
   }
   public submit(){
    const authRequest: IAuthRequest = {
      login: this.authForm.controls['login'].value,
      password: this.authForm.controls['password'].value,
    }
     this.authForm.valid ? alert(`Login: ${authRequest.login} Password: ${authRequest.password}`) : alert('ERROR');
   }

}
