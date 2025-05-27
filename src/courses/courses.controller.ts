import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'Listagem de Cursos' });
  }

  @Get(':id/:name')
  findOne(@Param('id') id: string, @Param('name') name: string) {
    return `Curso ${id} - ${name}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Atualizando curso ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removendo curso ${id}`;
  }
}
