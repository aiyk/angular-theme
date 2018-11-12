import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemDocumentationRoutingModule } from './design-system-documentation-routing.module';
import { DesignSystemBaseComponent } from './design-system-base.component';
import { SystemColorsComponent } from './system-colors/system-colors.component';
import { ShadowDefComponent } from './shadow-def/shadow-def.component';
import { TablesDefComponent } from './tables-def/tables-def.component';
import { ButtonsDefComponent } from './buttons-def/buttons-def.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { AlertDefComponent } from './alert-def/alert-def.component';
import { PopupModalsComponent } from './popup-modals/popup-modals.component';
import { TreeDefComponent } from './tree-def/tree-def.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemDocumentationRoutingModule
  ],
  declarations: [DesignSystemBaseComponent, SystemColorsComponent, ShadowDefComponent, TablesDefComponent, ButtonsDefComponent, FormElementsComponent, DropdownMenuComponent, AlertDefComponent, PopupModalsComponent, TreeDefComponent]
})
export class DesignSystemDocumentationModule { }
