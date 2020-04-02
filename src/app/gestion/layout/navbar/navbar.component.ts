import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../gestion.service';
import { ProduitPanier } from '../../panier/panier.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private service: GestionService) {}
  isActive = false;
  count;
  prodList: Array<ProduitPanier> = new Array<ProduitPanier>();
  total: number;

  nombreProduits: number;
  ngOnInit() {
    this.service.currentList.subscribe(list => {this.prodList = list;});
    this.service.currentTotal.subscribe(x => this.count = x);


  }


  showList() {
    console.log(this.prodList);

  }

}
