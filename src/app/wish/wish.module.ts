import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayListComponent } from './display-list/display-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishComponent } from './wish.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { WishRoutingModule } from './wish-routing.module';

const wishRoutes: Routes = [
  { path: 'wish', component: WishComponent }
]

@NgModule({
  declarations: [
    DisplayListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(wishRoutes)
  ]
})
export class WishModule { }
