import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tables-def",
  templateUrl: "./tables-def.component.html",
  styleUrls: ["./tables-def.component.scss"]
})
export class TablesDefComponent implements OnInit {
  ddmenu_tags = false;
  ddmenu_tblmenu = false;
  ddmenu_tblitem = false;
  ishtml = true;
  ists = false;
  iscss = false;

  htmlcode=`
  <section class="block-element">
    <div class="sect-title">
      <span>Tables</span>
      <div class="sect-headers">
        <div class="headers-block">
          <div class="head-item">
            <label>12,000,000 Total</label>
          </div>
          <div class="head-item dropdown-wrap">
            <label>Sort by:</label>
            <div (click)="tags_onclick()" class="head-val clickable">Tags <img src="assets/icon-set/angle-down.svg"> </div>
            <ul (click)="tags_onclick()" *ngIf="ddmenu_tags" class="dropdown-menu">
              <li>Date Created</li>
              <li class="ddmenu-active">Tags</li>
              <li>Alphabetical</li>
              <li>Email</li>
              <li>Age</li>
              <li>Person</li>
            </ul>
          </div>
        </div>
        <div class="headers-block">
          <div class="head-item">
            <button class="btn-white btn-filter-right btn-x1">Filter</button>
          </div>
          <div class="head-item">
            <button class="btn-white btn-list-center btn-x0"></button>
          </div>
          <div class="head-item"> 
            <button class="btn-blue btn-plus-left btn-x1">Add Patient</button>
          </div>
          <div class="head-item">
            <button (click)="tblmenu_onclick()" class="btn-white btn-elipsis-v-center btn-x0"></button> 
            <div class="dropdown-wrap">
              <ul (click)="tblmenu_onclick()" *ngIf="ddmenu_tblmenu" class="dropdown-menu">
                <li><img src="assets/icon-set/plus.svg"> Add New </li>
                <li><img src="assets/icon-set/file.svg"> Upload Excel File</li>
                <li><img src="assets/icon-set/folder.svg"> Import CSV File</li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="th">Person</div>
          <div class="th">Age</div>
          <div class="th">Gender</div>
          <div class="th">Phone Number</div>
          <div class="th">Email Address</div>
          <div class="th"></div>
        </div>
      </div>
  
      <div class="tbody">
        <div *ngFor="let person of people; let i = index" class="tr">
          <div class="td td-user">
            <div class="td-img-wrap">
              <img src="">
            </div>
            <span>{{person.firstname}} {{person.lastname}}</span>
          </div>
          <div class="td">{{person.age}}</div>
          <div class="td">{{person.gender}}</div>
          <div class="td">{{person.phone}}</div>
          <div class="td">{{person.email}}</div> 
          <div class="td td-actions dropdown-wrap">
            <button (click)="tblmenuitem_onclick(i)" class="btn-hollow btn-elipsis-v-center btn-x0"></button> 
            <div class="dropdown-wrap">
              <ul (click)="tblmenuitem_onclick('')" *ngIf="item_to_show(i)" class="dropdown-menu">
                <li><img src="assets/icon-set/edit.svg"> Edit </li>
                <li><img src="assets/icon-set/trash.svg"> Delete</li>
                <li><img src="assets/icon-set/Duplicate.svg"> Duplicate</li> 
              </ul>
            </div> 
          </div> 
        </div>
      </div>
    </div>
  </section>`;

  tscode=`
  people: any[] = [
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    },
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    },
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    },
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    }
  ];
  `;
  people: any[] = [
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    },
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    },
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    },
    {
      firstname: "Ikechukwu",
      lastname: "Ekwe",
      age: "22yrs",
      gender: "Male",
      phone: "08143492211",
      email: "aiyk.ekwe@gmail.com"
    }
  ];

  constructor() {}

  clickItemIndex: number;
  ngOnInit() {}

  tags_onclick() {
    this.ddmenu_tags = !this.ddmenu_tags;
  }
  item_to_show(i) {
    return this.clickItemIndex === i;
  }
  tblmenu_onclick() {
    this.ddmenu_tblmenu = !this.ddmenu_tblmenu;
  }
  tblmenuitem_onclick(itemIndex) {
    this.clickItemIndex = itemIndex;
    this.ddmenu_tblitem = !this.ddmenu_tblitem;
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
