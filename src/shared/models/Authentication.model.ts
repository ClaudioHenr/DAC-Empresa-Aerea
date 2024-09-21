export enum AuthenticationType {
    EMPLOYEE = 1,
    CUSTOMER = 2
}

export class Authentication {
    login?: string;
    password?: string;
    type?: string
}