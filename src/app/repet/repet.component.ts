import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-repet',
  templateUrl: './repet.component.html',
  styleUrls: ['./repet.component.scss']
})
export class RepetComponent implements OnInit {

  response: Reponse = new Reponse;
  rep: Rep = new Rep;

  constructor(private serv: HomeService) { }

  ngOnInit() {
  }

  repet() {
    this.serv.repet(this.rep).subscribe(data => {this.response = data, console.log(data);
    }, err => console.log(err)
    );
  }

}

export class Rep {
  nombre: number;
  chaine: string;
}

export class Reponse {
  response: string;
}
