export enum authenticationType {
    EMPLOYEE = 1,
    CUSTOMER = 2
}

export class authentication {
    login?: string;
    password?: string;
    type?: string
}