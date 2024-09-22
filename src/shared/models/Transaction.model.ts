import { Customer } from "./Customer.model";

export class Transaction {
    customer?: Customer;
    transactionDate?: Date; // Data/hora transação
    amountMiles?: number; // Qtd milhas
    // entrada/saida ??
    description?: string
}