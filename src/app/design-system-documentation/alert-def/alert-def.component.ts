import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-def',
  templateUrl: './alert-def.component.html',
  styleUrls: ['./alert-def.component.scss']
})
export class AlertDefComponent implements OnInit {

  input_ishtml = true;
  input_ists = false;
  input_iscss = false;

  errLite_ishtml = true;
  errLite_ists = false;
  errLite_iscss = false;

  infoLite_ishtml = true;
  infoLite_ists = false;
  infoLite_iscss = false;

  input_snippet = `
  <div class="form-group">
    <div class="notification input-error">You have a big buggy bug here!!!</div>
  </div>
  `;

  notification_errLite_snippet = `
  <div class="notification default-alert-err">Your alert message goes here</div>
  `;

  notification_infoLite_snippet = `
  <div class="notification default-alert-info">Your alert message goes here</div>
  `;

  constructor() { }

  ngOnInit() {
  }

  htmltab(target){
    if(target==='input_error'){
      this.input_ishtml = true;
      this.input_iscss = false;
      this.input_ists = false;
    } else if(target==='notification_err_lite'){
      this.errLite_ishtml = true;
      this.errLite_ists = false;
      this.errLite_iscss = false;
    } else if(target==='notification_info_lite'){
      this.infoLite_ishtml = true;
      this.infoLite_ists = false;
      this.infoLite_iscss = false;
    }
  }
  csstab(target){
    if(target==='input_error'){
      this.input_ishtml = false;
      this.input_iscss = true;
      this.input_ists = false;
    } else if(target==='notification_err_lite'){
      this.errLite_ishtml = false;
      this.errLite_iscss = true;
      this.errLite_ists = false;
    } else if(target==='notification_info_lite'){
      this.infoLite_ishtml = false;
      this.infoLite_iscss = true;
      this.infoLite_ists = false;
    }
  }
  tstab(target){
    if(target==='input_error'){
      this.input_ishtml = false;
      this.input_iscss = false;
      this.input_ists = true;
    } else if(target==='notification_err_lite'){
      this.errLite_ishtml = false;
      this.errLite_iscss = false;
      this.errLite_ists = true;
    } else if(target==='notification_info_lite'){
      this.infoLite_ishtml = false;
      this.infoLite_iscss = false;
      this.infoLite_ists = true;
    }
  }

}
