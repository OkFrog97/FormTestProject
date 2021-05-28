export interface ILoginForm {
  formTitle: string;
  loginTitle: string;
  passwordTitle: string;
  submitTitle: string;
  checkPassword: (string) => boolean;
}
