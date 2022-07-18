import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Snack, SnackRange } from './snack.model';
import { SnacksService } from './snacks.service';
import { CreateSnackDto } from './dto/create-snack-dto';

@Controller('snacks')
export class SnacksController {
  constructor(private snacksService: SnacksService) {}

  //Get Method
  @Get()
  getSnack(): Snack[] {
    return this.snacksService.getAllSnack();
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
  @Patch('/:id/range')
  updateSnackRange(
    @Param('id') id: string,
    @Body('range') range: SnackRange,
  ): Snack {
    return this.snacksService.updateSnackRange(id, range);
  }
}
