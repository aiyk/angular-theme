import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow-def',
  templateUrl: './shadow-def.component.html',
  styleUrls: ['./shadow-def.component.scss']
})
export class ShadowDefComponent implements OnInit {

  shadows: any[] = [
    "shadow-x1",
    "shadow-x2",
    "shadow-x3",
    "shadow-x4",
    "shadow-x5"
  ];

  constructor() { }

  ngOnInit() {
  }

}
