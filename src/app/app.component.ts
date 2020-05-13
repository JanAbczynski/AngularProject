import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // viewMode = 'list';
  mapMode = true;
  listMode = false;


  courses = [
    {id: 1, name: "course 1"},
    {id: 2, name: "course 2"},
    {id: 3, name: "course 3"}
    
  ];
  
  post = {
    title: "Title of post",
    isFavorite: true
  }
 
  title = 'Angular app';

  onAdd(){
    this.courses.push({ id: 4, name: 'course 4'})
  }

  remove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  change(course){
    course.name = 'UPdated';
  }

  onFavoriteChange(eventArgs: {newValue: FavoriteChangedEventArgs}){
    console.log("fovoriataa", eventArgs)
  }


}
