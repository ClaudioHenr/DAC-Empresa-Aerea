import { Address } from "./Address.model";

export class Customer {
    name?: string;
    cpf?: string;
    email?: string;
    address?: Address;
    street?: string;
    number?: number;
    zipCode?: string;
    city?: string;
    state?: string;
    complement?: string;
}
