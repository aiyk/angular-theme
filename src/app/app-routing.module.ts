import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'design-system', pathMatch: 'full'
  },
  {
    path: 'design-system',
    loadChildren: './design-system-documentation/design-system-documentation.module#DesignSystemDocumentationModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
