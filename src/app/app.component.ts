import { Component } from '@angular/core';



@Component({
  selector: 'app-root', //selector root for component  <app-root>Loading...</app-root> in index.html
  templateUrl: './app.component.html',//template - external in this case but can de done inline her ``
  styleUrls: ['./app.component.css'] //css styles applied to component - here external  file but can be done inline here
})

export class AppComponent {
  title = 'app works!';
}
