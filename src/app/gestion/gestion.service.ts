import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProduitDto } from './produits/produit.model';
import { ClientDto } from './create-client/create-client.component';
import { BehaviorSubject } from 'rxjs';
import { ProduitPanier, FinalizeDto } from './panier/panier.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  // prodList: Array<string> = new Array<string>();
  private list = new BehaviorSubject(new Array<ProduitPanier>());
  currentList = this.list.asObservable();
  x:number = 0;
  private total = new BehaviorSubject(this.x);
  currentTotal = this.total.asObservable();

  constructor(private http: HttpClient) { }

  addProduct(prod: ProduitPanier[]) {
    this.list.next(prod);
  }

  updatePrice(price: number) {
    this.total.next(price);
  }

  getAllProduits() {
    return this.http.get('http://localhost:8080/gestion/produits');
  }

  getProduitById(id: number) {
    return this.http.get('http://localhost:8080/gestion/produit/' + id);
  }
  createProd(produit: ProduitDto) {
    const body = JSON.stringify(produit);
    console.log(body, produit);

    return this.http.post('http://localhost:8080/gestion/create/produit', body, httpOptions);
  }

  createClient(client: ClientDto) {
    // const body = JSON.stringify(client);
    console.log(client, client);

    return this.http.post('http://localhost:8080/gestion/create/client', client, httpOptions);
  }

  finalize(finalize: FinalizeDto) {
    const body = JSON.stringify(finalize);
    console.log(body, finalize);
    return this.http.post('http://localhost:8080/gestion/finalize', body, httpOptions);
  }

}
