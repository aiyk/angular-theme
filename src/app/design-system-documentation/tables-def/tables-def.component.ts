import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-def',
  templateUrl: './tables-def.component.html',
  styleUrls: ['./tables-def.component.scss']
})
export class TablesDefComponent implements OnInit {

  people: any[] = [
    {
      "firstname": "Ikechukwu",
      "lastname": "Ekwe",
      "age": "22yrs",
      "gender": "Male",
      "phone": "08143492211",
      "email": "aiyk.ekwe@gmail.com"
    },
    {
      "firstname": "Ikechukwu",
      "lastname": "Ekwe",
      "age": "22yrs",
      "gender": "Male",
      "phone": "08143492211",
      "email": "aiyk.ekwe@gmail.com"
    },
    {
      "firstname": "Ikechukwu",
      "lastname": "Ekwe",
      "age": "22yrs",
      "gender": "Male",
      "phone": "08143492211",
      "email": "aiyk.ekwe@gmail.com"
    },
    {
      "firstname": "Ikechukwu",
      "lastname": "Ekwe",
      "age": "22yrs",
      "gender": "Male",
      "phone": "08143492211",
      "email": "aiyk.ekwe@gmail.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
