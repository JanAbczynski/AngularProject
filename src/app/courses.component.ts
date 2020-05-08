import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase}} <br/>
    {{ course.students | number}} <br/>
    {{ course.rating | number:'2.2-2' }} <br/>
    {{ course.price | currency:'PLN ':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
        `
})

export class CoursesComponent {

    course = {
        title: "The title",
        rating: 4.1,
        students: 101200,
        price: 130.23,
        releaseDate: new Date(2015, 12, 22)
    }


}