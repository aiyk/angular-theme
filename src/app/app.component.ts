import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState = true;
  
  toggleMenu_click($event){
    this.menuState = !this.menuState
  }
}
