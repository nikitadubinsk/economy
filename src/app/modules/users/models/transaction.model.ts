export interface ITransactionInfo {
    name: string;
    sum: number;
}

export interface ITransaction extends ITransactionInfo {
    date: string;
}