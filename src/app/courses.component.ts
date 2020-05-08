import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <div>
            <input #email (keyup.enter)="onKeyUp(email.value)" />
        </div>
        `
})

export class CoursesComponent {

    onDivClick(){
                console.log("Div click")
    }

    onKeyUp(email){
        console.log(email);
    }

    onSave($event){
        // @event.stopPropagation();
        console.log('asd');
    }



}