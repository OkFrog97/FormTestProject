import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export interface ILoginForm {
  formTitle: string;
  loginTitle: string;
  passwordTitle: string;
  submitTitle: string;
  errorText?: string;
  icon?: IconDefinition;
  checkPassword: () => boolean;
}

export interface IAuthRequest {
  login: string;
  password: string;
}
