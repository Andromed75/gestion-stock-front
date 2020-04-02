import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ProduitPanier } from '../panier/panier.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  prods;
  prodList: Array<ProduitPanier> = new Array<ProduitPanier>();
  constructor(private service: GestionService) { }
  total = 0;
  isAdded = false;

  ngOnInit() {
    this.getAllProduits();
    this.service.currentList.subscribe(list => this.prodList = list);
    this.service.currentTotal.subscribe(x => this.total = x);

  }

  compare(p: string) {

    for (const x of this.prodList) {
      if (x.nomProduit === p) {
        return true;
      }
    }
    return false;
  }

  addProductTolist(prod: string, prix: number, photo: string) {

     if(this.prodList.length===0) {
      this.isAdded = true;
      setTimeout(() => this.isAdded = false, 2500);
      const p = new ProduitPanier();
      p.nomProduit = prod;
      p.quantity = 1;
      p.prix = prix;
      p.photo = photo;
      console.log('liste vide', p);
      this.total += 1;

      this.service.updatePrice(this.total);

      this.prodList.push(p);
      return;
     }

     if(!this.compare(prod)) {
      const p = new ProduitPanier();
      p.nomProduit = prod;
      p.quantity = 1;
      p.prix = prix;
      p.photo = photo;
      console.log('Element non connu', p);
      this.prodList.push(p);
     }
     else {
       console.log('ELSE');
      const objIndex = this.prodList.findIndex((obj => obj.nomProduit === prod));
      this.prodList[objIndex].quantity = this.prodList[objIndex].quantity + 1;

     }



      this.total += 1;

     this.service.updatePrice(this.total);
     console.log('total', this.total);


     console.log(this.prodList);
     this.isAdded = true;
     setTimeout(() => this.isAdded = false, 2500);
  }

  getAllProduits(){
    this.service.getAllProduits().subscribe(
      data => {
        this.prods = data;

      },
      err => {
        console.log(err);

      }
    );
  }

}
