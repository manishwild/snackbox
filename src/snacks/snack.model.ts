export interface Snack {
  id: string;
  title: string;
  description: string;
  range: SnackRange;
}
export enum SnackRange {
  MAXPRICE = 'MAXPRICE',
  MINPRICE = 'MINPRICE',
  AVERAGE = 'AVERAGE',
}
