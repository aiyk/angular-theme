import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemDocumentationRoutingModule } from './design-system-documentation-routing.module';
import { DesignSystemBaseComponent } from './design-system-base.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemDocumentationRoutingModule
  ],
  declarations: [DesignSystemBaseComponent]
})
export class DesignSystemDocumentationModule { }
