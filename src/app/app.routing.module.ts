import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import  {ProduitResolver} from './produit/produit.resolver';
export  const  AppRoutes: Routes = [{path: 'produit' , component: ProduitComponent, resolve:{produits: ProduitResolver}},
    {path: 'dashboard' , component: DashboardComponent},
  {path: '' , redirectTo: '/dashboard', pathMatch: 'full'}];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)], exports : [RouterModule], providers : [ProduitResolver]
})
export  class AppRoutingModule {

}
