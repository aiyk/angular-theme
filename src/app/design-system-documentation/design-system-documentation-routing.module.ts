import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemBaseComponent } from './design-system-base.component';
import { SystemColorsComponent } from './system-colors/system-colors.component';
import { ShadowDefComponent } from './shadow-def/shadow-def.component';

const routes: Routes = [
  { path: '', redirectTo: 'colors' },
  { path: 'colors', component: SystemColorsComponent },
  { path: 'shadows', component: ShadowDefComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemDocumentationRoutingModule { }
