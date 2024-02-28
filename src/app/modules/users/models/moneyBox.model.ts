import { IBudget } from './statistics.model';

export interface IMoneyBox {
  id: number;
  name: string;
  sum: IBudget;
  date?: IMoneyBoxDate;
}

export interface IMoneyBoxDate {
  dateStart: string;
  dateEnd: string;
}
