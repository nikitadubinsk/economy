export interface IRate extends ICreateRate {
  id: number;
}

export interface ICreateRate {
  name: string;
  description: string;
  price: number;
  maxUsers: number;
  active: boolean;
}
