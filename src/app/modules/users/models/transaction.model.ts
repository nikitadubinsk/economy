import { ISimpleItem } from 'src/app/models';

export interface ITransactionInfo {
  date: string;
  name: string;
  sum: number;
  id: number;
}

export interface ITransaction extends ITransactionInfo {
  category?: ISimpleItem;
}

export interface ITransactionForm extends ITransactionInfo {
  category: number;
}

export interface ITransactionFilter {
  name: string;
  dateFrom: string;
  dateTo: string;
  page: number;
}
