import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebshopComponent } from './webshop.component';

const routes: Routes = [
  { path: '', component: WebshopComponent },
  {
    path: 'afterbuy',
    loadChildren: () =>
      import('./afterbuy/afterbuy.module').then((m) => m.AfterbuyModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebshopRoutingModule {}
