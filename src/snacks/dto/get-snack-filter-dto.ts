import { SnackRange } from '../snack.model';

export class GetSnacksFilterDto {
  range?: SnackRange;
  search?: string;
}
