import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <button class="btn btn-primary">button</button>
    <table>
        <tr>
            <td [attr.colspan]="colSpan">xx</td>
        </tr>
    </table>
    
    `
})
export class CoursesComponent {
    coalSpan = 2;
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    courses;

    constructor (service: CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    
    }

    getTitle(){
        return this.title;

    }

}