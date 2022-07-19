import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Snack, SnackPrice } from './snack.model';
import { SnacksService } from './snacks.service';
import { CreateSnackDto } from './dto/create-snack-dto';
import { GetSnacksFilterDto } from './dto/get-snack-filter-dto';

@Controller('snacks')
export class SnacksController {
  constructor(private snacksService: SnacksService) {}

  //Get Method
  @Get()
  getSnack(@Query() filterDto: GetSnacksFilterDto): Snack[] {
    if (Object.keys(filterDto).length) {
      return this.snacksService.getSnacksWithFilters(filterDto);
    } else {
      return this.snacksService.getAllSnack();
    }
  }

  //Get Snack by Id
  @Get('/:id')
  getSnackById(@Param('id') id: string): Snack {
    return this.snacksService.getSnackById(id);
  }

  //Post Method
  @Post()
  createSnack(@Body() createSnackDto: CreateSnackDto): Snack {
    return this.snacksService.createSnack(createSnackDto);
  }

  // delete Method
  @Delete('/:id')
  deleteSnack(@Param('id') id: string): void {
    return this.snacksService.deleteSnack(id);
  }

  // update method
  @Patch('/:id/price')
  updateSnackRange(
    @Param('id') id: string,
    @Body('price') price: SnackPrice,
  ): Snack {
    return this.snacksService.updateSnackRange(id, price);
  }
}
