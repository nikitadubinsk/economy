export interface IAuthResponse {
  sessionId?: string;
  roles: string;
}

export interface ILoginForm {
  login: string;
  password: string;
}

export interface IRegisrtation {
  name: string;
  birthday: string;
  email: string;
  password1: string;
  password2: string;
  parentEmail?: string;
}
