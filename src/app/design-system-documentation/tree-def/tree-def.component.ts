import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-def',
  templateUrl: './tree-def.component.html',
  styleUrls: ['./tree-def.component.scss']
})
export class TreeDefComponent implements OnInit {

  tree_ishtml = true;
  tree_ists = false;
  tree_iscss = false;

  treeState = false;
  clickItemIndex: number;

  list: any[] = [
    {
      "label": "Item A",
      "count": "5",
    },
    {
      "label": "Item B",
      "count": "6",
    },
    {
      "label": "Item C",
      "count": "7",
    },
    {
      "label": "Item D",
      "count": "2",
    },
    {
      "label": "Item E",
      "count": "15",
    }
  ];

  tree_snippet_html = `
  <div class="x2-item">
    <div *ngFor = "let item of list; let i = index" class="tree-wrap">
      <div class="tree-item">
        <div (click)="treeItem_toggle(i)" [class.i-open] = item_to_show(i) [class.i-close] = !item_to_show(i) class="i-pointer"></div> 
        <div class="i-folder"></div>
        <div class="tree-label">{{item.label}} ({{item.count}})</div>
      </div>
      <div *ngIf="item_to_show(i)" class="tree-content">
        <legend><strong>{{item.label}}</strong> is the base upon which the content seats</legend>
        <button class="btn-blue btn-plus-left btn-x2">{{item.label}}</button>
      </div>
    </div>
  </div>
  `;
  tree_snippet_ts = `
  treeState = false;
  clickItemIndex: number;

  list: any[] = [
    {
      "label": "Item A",
      "count": "5",
    },
    {
      "label": "Item B",
      "count": "6",
    },
    {
      "label": "Item C",
      "count": "7",
    },
    {
      "label": "Item D",
      "count": "2",
    },
    {
      "label": "Item E",
      "count": "15",
    }
  ]; 

  item_to_show(i) {
    if(this.clickItemIndex === i && this.treeState == true) return true;
    if(this.clickItemIndex === i && this.treeState == false) return false;
  }
  treeItem_toggle(itemIndex) {
    this.clickItemIndex = itemIndex;
    this.treeState = !this.treeState;
  }
  `;

  constructor() { }

  ngOnInit() {
  }

  htmltab(){
    this.tree_ishtml = true;
    this.tree_ists = false;
    this.tree_iscss = false;
  }
  csstab(){
    this.tree_ishtml = false;
    this.tree_ists = false;
    this.tree_iscss = true;
  }
  tstab(){
    this.tree_ishtml = false;
    this.tree_ists = true;
    this.tree_iscss = false;
  }
  item_to_show(i) {
    if(this.clickItemIndex === i && this.treeState == true) return true;
    if(this.clickItemIndex === i && this.treeState == false) return false;
  }
  treeItem_toggle(itemIndex) {
    this.clickItemIndex = itemIndex;
    this.treeState = !this.treeState;
  }

}
