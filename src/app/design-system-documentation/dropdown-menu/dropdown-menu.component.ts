import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  ddmenu_tags = true;
  ddmenu_tags2 = true;
  ishtml = true;
  ists = false;
  iscss = false;
  ishtml2 = true;
  ists2 = false;
  iscss2 = false;

  htmlcode=`
  <button (click)="tags_onclick()" class="btn-hollow btn-list-center btn-x0"></button>
  <div class="dropdown-wrap">
    <ul (click)="tags_onclick()" *ngIf="ddmenu_tags" class="dropdown-menu">
      <li>Date Created</li>
      <li class="ddmenu-active">Tags</li>
      <li>Alphabetical</li>
      <li>Email</li>
      <li>Age</li>
      <li>Person</li>
    </ul>
  </div> 
  `;

  htmlcode2=`
  <button (click)="tblmenuitem_onclick(i)" class="btn-hollow btn-elipsis-v-center btn-x0"></button> 
  <div class="dropdown-wrap">
    <ul (click)="tblmenuitem_onclick('')" *ngIf="item_to_show(i)" class="dropdown-menu">
      <li><img src="assets/icon-set/edit.svg"> Edit </li>
      <li><img src="assets/icon-set/trash.svg"> Delete</li>
      <li><img src="assets/icon-set/Duplicate.svg"> Duplicate</li> 
    </ul>
  </div> 
  `;

  constructor() { }

  ngOnInit() {
  }

  tags_onclick(){
    this.ddmenu_tags = !this.ddmenu_tags;
  }
  tags_onclick2(){
    this.ddmenu_tags2 = !this.ddmenu_tags2;
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

}
