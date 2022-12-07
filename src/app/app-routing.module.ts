import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
// import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
{path:'product',component:AllProductsComponent},
{path:'details/:id',component:DetailsComponent},
{path:'cart',component:CartComponent},
{path:'**' ,redirectTo:'product',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
