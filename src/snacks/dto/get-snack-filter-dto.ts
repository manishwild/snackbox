import { SnackPrice } from '../snack.model';

export class GetSnacksFilterDto {
  price?: SnackPrice;
  search?: string;
}
