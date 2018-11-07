import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  ishtml = true;
  ists = false;
  iscss = false;

  ishtml2 = true;
  ists2 = false;
  iscss2 = false;

  ishtml3 = true;
  ists3 = false;
  iscss3 = false;

  inputfields2 = `
  <input class="input-invalid" type="text" placeholder="Enter some text">

  <input class="input-valid" type="text" placeholder="Enter some text">

  <div class="form-group">
    <input class="input-invalid" type="text" placeholder="Enter some text">
    <div class="notification input-error">You have a big buggy bug here!!!</div>
  </div>
  `;

  inputfields1 = `
  <input type="text" placeholder="Enter some text">

  <input type="text" placeholder="Enter some text" disabled>

  <input type="text" value="Read only value" readonly>
  `;

  inputfields3 = `
  <div class="search-wrap">
    <input type="search" placeholder="Type your search">
  </div>

  <input type="password">
  
  <textarea></textarea>
  `;

  constructor() { }

  ngOnInit() {
  }

  htmltab(){
    this.ishtml = true;
    this.iscss = false;
    this.ists = false;
  }
  csstab(){
    this.ishtml = false;
    this.iscss = true;
    this.ists = false;
  }
  tstab(){
    this.ishtml = false;
    this.iscss = false;
    this.ists = true;
  }

  htmltab2(){
    this.ishtml2 = true;
    this.iscss2 = false;
    this.ists2 = false;
  }
  csstab2(){
    this.ishtml2 = false;
    this.iscss2 = true;
    this.ists2 = false;
  }
  tstab2(){
    this.ishtml2 = false;
    this.iscss2 = false;
    this.ists2 = true;
  }

  htmltab3(){
    this.ishtml3 = true;
    this.iscss3 = false;
    this.ists3 = false;
  }
  csstab3(){
    this.ishtml3 = false;
    this.iscss3 = true;
    this.ists3 = false;
  }
  tstab3(){
    this.ishtml3 = false;
    this.iscss3 = false;
    this.ists3 = true;
  }

}
