import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WishComponent } from "./wish.component";

const wishRoutes: Routes = [
	{ path: 'wish', component: WishComponent }
]

@NgModule({
	imports: [RouterModule.forChild(wishRoutes)],
	exports: [RouterModule]
})
export class WishRoutingModule { }