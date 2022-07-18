import { Injectable } from '@nestjs/common';
import { Snack, SnackPrice } from './snack.model';
import { v4 as uuid } from 'uuid';
import { CreateSnackDto } from './dto/create-snack-dto';
import { GetSnacksFilterDto } from './dto/get-snack-filter-dto';

@Injectable()
export class SnacksService {
  private snacks: Snack[] = [];

  // Get method
  getAllSnack(): Snack[] {
    return this.snacks;
  }

  // filter and search method
  getSnacksWithFilters(filterDto: GetSnacksFilterDto): Snack[] {
    const { price, search } = filterDto;
    let snacks = this.getAllSnack();

    if (price) {
      snacks = snacks.filter((snack) => snack.price === price);
    }

    if (search) {
      snacks = snacks.filter((snack) => {
        if (
          snack.title.includes(search) ||
          snack.description.includes(search)
        ) {
          return true;
        }
        return false;
      });
    }
    return snacks;
  }

  //Get Snack by id Method
  getSnackById(id: string): Snack {
    return this.snacks.find((snack) => snack.id === id);
  }

  // post method
  createSnack(createSnackDto: CreateSnackDto): Snack {
    const { title, description } = createSnackDto;
    const snack: Snack = {
      id: uuid(),
      title,
      description,
      price: SnackPrice.MINPRICE,
    };
    this.snacks.push(snack);
    return snack;
  }

  // patch method
  updateSnackRange(id: string, price: SnackPrice): Snack {
    const snack = this.getSnackById(id);
    snack.price = price;
    return snack;
  }

  // delete method
  deleteSnack(id: string): void {
    this.snacks = this.snacks.filter((snack) => snack.id !== id);
  }
}
