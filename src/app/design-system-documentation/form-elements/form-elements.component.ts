import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  inputfields = `
  <input type="text" placeholder="Enter some text">

  <input type="text" placeholder="Enter some text" disabled>

  <input type="text" value="Read only value" readonly>

  <input class="input-invalid" type="text" placeholder="Enter some text">

  <input class="input-valid" type="text" placeholder="Enter some text">
  
  <div class="search-wrap">
    <input type="search" placeholder="Type your search">
  </div>
  `;

  constructor() { }

  ngOnInit() {
  }

}
