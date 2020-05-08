import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <div>
            <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        </div>
        `
})

export class CoursesComponent {
    email = "sss";

    onDivClick(){
        console.log("Div click")
    }

    onKeyUp(){
        console.log(this.email);
    }

    onSave($event){
        // @event.stopPropagation();
        console.log('asd');
    }



}