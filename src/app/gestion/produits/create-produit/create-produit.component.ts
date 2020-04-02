import { Component, OnInit } from '@angular/core';
import { ProduitDto } from '../produit.model';
import { GestionService } from '../../gestion.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss']
})
export class CreateProduitComponent implements OnInit {

  produit: ProduitDto = new ProduitDto();
  isCreated = false;
  constructor(private service: GestionService) { }

  ngOnInit() {
  }

  createProduit(){

    this.service.createProd(this.produit).subscribe(
      data => {
        console.log(data);
        this.isCreated = true;
        this.produit.nom = '';
        this.produit.prix = undefined;
      },
       err => console.log(err)
    );
  }

  recreate(){
    this.isCreated = !this.isCreated;
  }

}
