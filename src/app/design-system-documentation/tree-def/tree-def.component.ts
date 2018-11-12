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

  tree_snippet = ``;

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
