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

  successLite_ishtml = true;
  successLite_ists = false;
  successLite_iscss = false;

  warningLite_ishtml = true;
  warningLite_ists = false;
  warningLite_iscss = false;

  err_ishtml = true;
  err_ists = false;
  err_iscss = false;

  info_ishtml = true;
  info_ists = false;
  info_iscss = false;

  success_ishtml = true;
  success_ists = false;
  success_iscss = false;

  warning_ishtml = true;
  warning_ists = false;
  warning_iscss = false;

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

  notification_successLite_snippet = `
  <div class="notification default-alert-success">Your alert message goes here</div>
  `;

  notification_warningLite_snippet = `
  <div class="notification default-alert-warning">Your alert message goes here</div>
  `;

  notification_err_snippet = `
  <div class="notification dismisable-alert-err">Your alert message goes here</div>
  `;

  notification_info_snippet = `
  <div class="notification dismisable-alert-info">Your alert message goes here</div>
  `;

  notification_success_snippet = `
  <div class="notification dismisable-alert-success">Your alert message goes here</div>
  `;

  notification_warning_snippet = `
  <div class="notification dismisable-alert-warning">Your alert message goes here</div>
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
    } else if(target==='notification_success_lite'){
      this.successLite_ishtml = true;
      this.successLite_ists = false;
      this.successLite_iscss = false;
    } else if(target==='notification_warning_lite'){
      this.warningLite_ishtml = true;
      this.warningLite_ists = false;
      this.warningLite_iscss = false;
    } else if(target==='notification_err'){
      this.err_ishtml = true;
      this.err_ists = false;
      this.err_iscss = false;
    } else if(target==='notification_info'){
      this.info_ishtml = true;
      this.info_ists = false;
      this.info_iscss = false;
    } else if(target==='notification_success'){
      this.success_ishtml = true;
      this.success_ists = false;
      this.success_iscss = false;
    } else if(target==='notification_warning'){
      this.warning_ishtml = true;
      this.warning_ists = false;
      this.warning_iscss = false;
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
    } else if(target==='notification_success_lite'){
      this.successLite_ishtml = false;
      this.successLite_iscss = true;
      this.successLite_ists = false;
    } else if(target==='notification_warning_lite'){
      this.warningLite_ishtml = false;
      this.warningLite_iscss = true;
      this.warningLite_ists = false;
    } else if(target==='notification_err'){
      this.err_ishtml = false;
      this.err_iscss = true;
      this.err_ists = false;
    } else if(target==='notification_info'){
      this.info_ishtml = false;
      this.info_iscss = true;
      this.info_ists = false;
    } else if(target==='notification_success'){
      this.success_ishtml = false;
      this.success_iscss = true;
      this.success_ists = false;
    } else if(target==='notification_warning'){
      this.warning_ishtml = false;
      this.warning_iscss = true;
      this.warning_ists = false;
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
    } else if(target==='notification_success_lite'){
      this.successLite_ishtml = false;
      this.successLite_iscss = false;
      this.successLite_ists = true;
    } else if(target==='notification_warning_lite'){
      this.warningLite_ishtml = false;
      this.warningLite_iscss = false;
      this.warningLite_ists = true;
    } else if(target==='notification_err'){
      this.err_ishtml = false;
      this.err_iscss = false;
      this.err_ists = true;
    } else if(target==='notification_info'){
      this.info_ishtml = false;
      this.info_iscss = false;
      this.info_ists = true;
    } else if(target==='notification_success'){
      this.success_ishtml = false;
      this.success_iscss = false;
      this.success_ists = true;
    } else if(target==='notification_warning'){
      this.warning_ishtml = false;
      this.warning_iscss = false;
      this.warning_ists = true;
    }
  } 

}
