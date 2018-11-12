import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-modals',
  templateUrl: './popup-modals.component.html',
  styleUrls: ['./popup-modals.component.scss']
})
export class PopupModalsComponent implements OnInit {

  confirm_ishtml = true;
  confirm_ists = false;
  confirm_iscss = false;

  confirm_snippet = `
  <div class="center-modal">
    <div class="modal m-small">
      <div class="modal-header">
        <div class="modal-dismis"></div>
      </div>
      <div class="modal-body">
        left aligned alert modal with heading. Automatically wraps when resized
      </div>
      <div class="modal-ctas">
        <button class="btn-blue btn-x2">Action</button>
        <button class="btn-hollow btn-x2">Cancel</button>
      </div> 
    </div>
  </div>
  `;

  modal_snippet = `
  <div class="center-modal">
    <div class="modal m-small">
      <div class="modal-header">
        <div class="modal-title">Modal Header</div>
        <div class="modal-dismis"></div>
      </div>
      <div class="modal-body">
        are you sure you want to delete this file?
      </div>
      <div class="modal-ctas">
        <button class="btn-red btn-x2">Delete</button>
        <button class="btn-hollow btn-x2">Cancel</button>
      </div> 
    </div>
  </div>
  `;

  constructor() { }

  ngOnInit() {
  }

  htmltab(target){}
  csstab(target){}
  tstab(target){}

}
