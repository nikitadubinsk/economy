export type TSimpleType = number | string | boolean;

export type TParam = TSimpleType | TSimpleType[];

export interface IParams {
  [K: string]: TParam;
}
