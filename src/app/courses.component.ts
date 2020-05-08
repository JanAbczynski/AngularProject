import { CoursesService } from './courses.service';
import { Component  } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <div>
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
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
        $event.stopPropagation();
        console.log('asd');
    }



}