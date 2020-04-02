import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepetComponent } from './repet/repet.component';
import { ImpotComponent } from './impot/impot.component';
import { CreateProduitComponent } from './gestion/produits/create-produit/create-produit.component';
import { CreateClientComponent } from './gestion/create-client/create-client.component';
import { PanierComponent } from './gestion/panier/panier.component';
import { ProduitsComponent } from './gestion/produits/produits.component';
import { DetailProduitComponent } from './gestion/produits/detail-produit/detail-produit.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'repet', component: RepetComponent},
{path: 'impot', component: ImpotComponent},
{path: 'gestion/create/produit', component: CreateProduitComponent},
{path: 'gestion/create/client', component: CreateClientComponent},
{path: 'gestion/panier', component: PanierComponent },
{path: 'gestion/produit/:id', component: DetailProduitComponent },
{path: 'gestion/produits', component: ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
