import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <div>
            <input (keyup.shift.arrowleft)="onKeyUp()" />
        </div>
        `
})

export class CoursesComponent {

    onDivClick(){
                console.log("Div click")
    }

    onKeyUp(){
        console.log("ENTER was pressed");
    }

    onSave($event){
        // @event.stopPropagation();
        console.log('asd');
    }



}