import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpleshPage } from './splesh.page';

const routes: Routes = [
  {
    path: '',
    component: SpleshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpleshPageRoutingModule {}
