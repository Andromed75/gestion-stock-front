import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RepetComponent } from './repet/repet.component';
import { ImpotComponent } from './impot/impot.component';
import { GestionComponent } from './gestion/gestion.component';
import { ProduitsComponent } from './gestion/produits/produits.component';
import { CreateProduitComponent } from './gestion/produits/create-produit/create-produit.component';
import { CreateClientComponent } from './gestion/create-client/create-client.component';
import { LayoutComponent } from './gestion/layout/layout.component';
import { NavbarComponent } from './gestion/layout/navbar/navbar.component';
import { PanierComponent } from './gestion/panier/panier.component';
import { DetailProduitComponent } from './gestion/produits/detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepetComponent,
    ImpotComponent,
    GestionComponent,
    ProduitsComponent,
    CreateProduitComponent,
    CreateClientComponent,
    LayoutComponent,
    NavbarComponent,
    PanierComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
