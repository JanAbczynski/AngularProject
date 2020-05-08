import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <div>
            <input (keyup.enter)="onKeyUp($event)" />
        </div>
        `
})

export class CoursesComponent {

    onDivClick(){
                console.log("Div click")
    }

    onKeyUp($event){
        console.log($event.target.value);
    }

    onSave($event){
        // @event.stopPropagation();
        console.log('asd');
    }



}