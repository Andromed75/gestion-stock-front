import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private service: GestionService) {}
  isActive = false;
  prodList: Array<ProduitPanier> = new Array<ProduitPanier>();
  nombreProduits: number;
  finalize: FinalizeDto = new FinalizeDto();
  nomClient = '';
  prixFinal = 0;
  isValidated = false;
  isFailed = false;
  ngOnInit() {
    this.service.currentList.subscribe(list => {
      this.prodList = list;
      console.log(this.prodList);
      for (const p of this.prodList) {
        console.log('PRIX : ',p.prix, 'QUANTITEY : ', p.quantity);

        this.prixFinal += (p.prix * p.quantity);}
      });
    this.service.currentTotal.subscribe(total => this.nombreProduits = total);
  }

  validate() {
    this.finalize.nomClient = this.nomClient;
    this.finalize.listProduit = this.prodList;
    this.service.finalize(this.finalize).subscribe(data => {
      console.log(data);
      this.isValidated = true;
    }, err => {
      console.log(err);
      this.isFailed = true;
    });

  }

  }


export class ProduitPanier {
  nomProduit: string;
  quantity: number;
  prix: number;
  photo: string;

}

export class FinalizeDto {
  nomClient: string;
  listProduit: ProduitPanier[];
}
