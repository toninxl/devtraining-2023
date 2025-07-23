import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Curso 1',
            description: 'Descrição do curso 1',
            tasgs: ['Java', 'C#', 'JavaScript']
        },
        {
            id: 2,
            name: 'Curso 2',
            description: 'Descrição do curso 2',
            tasgs: ['Java', 'C#', 'JavaScript']
        },
        {
            id: 3,
            name: 'Curso 3',
            description: 'Descrição do curso 3',
            tasgs: ['Java', 'C#', 'JavaScript']
        }
    ]

    findAll(){
        return this.courses;
    }

    findOne(id: number){
        return this.courses.find(course => course.id === id);
    }

    create(createCourseDTO: any){
        this.courses.push(createCourseDTO);
        return createCourseDTO;
    }

    update(id: number, upadateCourseDTO:any){
        const excistingCourse =  this.findOne(id);
        if(excistingCourse){
            const index = this.courses.findIndex(excistingCocourse => excistingCocourse.id === id);
            this.courses[index] = {
                id, ...upadateCourseDTO
            }
        }
        }
        
        delete(id: number){
            let index = this.courses.findIndex(course => course.id === id);
            if (index >= 0) { 
            this.courses.splice(index, 1);
        }
    }

}
