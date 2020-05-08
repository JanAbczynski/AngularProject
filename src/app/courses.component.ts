import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    {{ text | summary:10 }} 
        `
})

export class CoursesComponent {

    text = `qwe asd zxc wer sdf xcv ert dfg cvb rty fgh vbn
    `


}