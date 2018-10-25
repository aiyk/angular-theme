import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemDocumentationRoutingModule } from './design-system-documentation-routing.module';
import { DesignSystemBaseComponent } from './design-system-base.component';
import { SystemColorsComponent } from './system-colors/system-colors.component';
import { ShadowDefComponent } from './shadow-def/shadow-def.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemDocumentationRoutingModule
  ],
  declarations: [DesignSystemBaseComponent, SystemColorsComponent, ShadowDefComponent]
})
export class DesignSystemDocumentationModule { }
