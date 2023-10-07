export interface ITransactionInfo {
    date: string;
    name: string;
    sum: number;
    description?: string;
}

export interface ITransaction extends ITransactionInfo {
    category?: string;
}

export interface ITransactionForm extends ITransactionInfo {
    category: number;
}

export interface ITransactionFilter {
    name: string;
    date: string;
    page: number;
}