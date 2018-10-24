import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu_click(){
    this.toggleMenu.emit(true);
  }

}
