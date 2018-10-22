import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemBaseComponent } from './design-system-base.component';

const routes: Routes = [
  { path: '', redirectTo: 'doc' },
  { path: 'doc', component: DesignSystemBaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemDocumentationRoutingModule { }
