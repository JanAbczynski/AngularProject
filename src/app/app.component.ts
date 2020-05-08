import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title of post",
    isFavorite: true
  }

  title = 'Angular app';

  onFavoriteChange(){
    console.log("fovoriata")
  }
}
