export interface IAuthResponse {
    sessionId?: string;
    roles: string;
}

export interface ILoginForm {
    login: string;
    password: string;
}
