import { Component, OnInit } from '@angular/core';
import { ILoginForm } from "./type";
import { faTimesCircle} from "@fortawesome/free-regular-svg-icons";

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

  constructor() { }

  ngOnInit(): void {
  }

   public checkPassword (password: string) {
    return true;
   }


}
