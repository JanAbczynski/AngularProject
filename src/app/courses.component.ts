import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <div>
            <input (keyup)="onKeyUp($event)" />
        </div>
        `
})

export class CoursesComponent {

    onDivClick(){
                console.log("Div click")
    }

    onKeyUp($event){
        if ($event.keyCode === 13) console.log("ENTER was pressed");
    }

    onSave($event){
        // @event.stopPropagation();
        console.log('asd');
    }



}