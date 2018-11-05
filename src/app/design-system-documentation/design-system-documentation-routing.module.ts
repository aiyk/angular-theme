import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemBaseComponent } from './design-system-base.component';
import { SystemColorsComponent } from './system-colors/system-colors.component';
import { ShadowDefComponent } from './shadow-def/shadow-def.component';
import { TablesDefComponent } from './tables-def/tables-def.component';
import { ButtonsDefComponent } from './buttons-def/buttons-def.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { AlertDefComponent } from './alert-def/alert-def.component';

const routes: Routes = [
  { path: '', redirectTo: 'colors' },
  { path: 'colors', component: SystemColorsComponent },
  { path: 'shadows', component: ShadowDefComponent },
  { path: 'tables', component: TablesDefComponent },
  { path: 'buttons', component: ButtonsDefComponent },
  { path: 'form-elements', component: FormElementsComponent },
  { path: 'drop-down-menu', component: DropdownMenuComponent },
  { path: 'alerts', component: AlertDefComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemDocumentationRoutingModule { }
