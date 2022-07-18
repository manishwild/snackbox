export interface Snack {
  id: string;
  title: string;
  description: string;
  price: SnackPrice;
}
export enum SnackPrice {
  MAXPRICE = 'MAXPRICE',
  MINPRICE = 'MINPRICE',
  AVERAGE = 'AVERAGE',
}
