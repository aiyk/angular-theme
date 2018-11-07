import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-def',
  templateUrl: './alert-def.component.html',
  styleUrls: ['./alert-def.component.scss']
})
export class AlertDefComponent implements OnInit {

  ishtml = true;
  ists = false;
  iscss = false;

  snippet = `
  <div class="form-group">
    <div class="notification input-error">You have a big buggy bug here!!!</div>
  </div>
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

}
