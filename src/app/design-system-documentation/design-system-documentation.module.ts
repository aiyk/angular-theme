import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemDocumentationRoutingModule } from './design-system-documentation-routing.module';
import { DesignSystemBaseComponent } from './design-system-base.component';
import { SystemColorsComponent } from './system-colors/system-colors.component';
import { ShadowDefComponent } from './shadow-def/shadow-def.component';
import { TablesDefComponent } from './tables-def/tables-def.component';
import { ButtonsDefComponent } from './buttons-def/buttons-def.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemDocumentationRoutingModule
  ],
  declarations: [DesignSystemBaseComponent, SystemColorsComponent, ShadowDefComponent, TablesDefComponent, ButtonsDefComponent]
})
export class DesignSystemDocumentationModule { }
