import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemBaseComponent } from './design-system-base.component';
import { SystemColorsComponent } from './system-colors/system-colors.component';

const routes: Routes = [
  { path: '', redirectTo: 'colors' },
  { path: 'colors', component: SystemColorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemDocumentationRoutingModule { }
