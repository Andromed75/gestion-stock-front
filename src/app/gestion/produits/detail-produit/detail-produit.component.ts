import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionService } from '../../gestion.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  produit;

  constructor(private route: ActivatedRoute, private service: GestionService) { }

  ngOnInit() {
    this.getProduitById(this.route.snapshot.params.id);
  }

  getProduitById(id: number) {
    this.service.getProduitById(id).subscribe(p => {this.produit = p; console.log(p);
    }, err => console.log(err));
  }
}
