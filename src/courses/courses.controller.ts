import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response){
        return response.status(200).json({message:"Listagem de Cursos"});
    }
    
    @Get(':id/:name')
    findOne(@Param('id') id:string, @Param('name') name:string){
        return `Curso ${id} - ${name}`;
    }
    
    @Post()
    create(@Body() body){
        return body;
    }
}
