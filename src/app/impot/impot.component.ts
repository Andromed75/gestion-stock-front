import { Component, OnInit } from '@angular/core';
import { ImpotService } from './impot.service';
import { impotDTO } from './impot.model';

@Component({
  selector: 'app-impot',
  templateUrl: './impot.component.html',
  styleUrls: ['./impot.component.scss']
})
export class ImpotComponent implements OnInit {

  impot: impotDTO = new impotDTO();
  response;

  constructor(public impotService: ImpotService) { }

  ngOnInit() {
  }

  getTaxes() {
    this.impotService.getTaxes(this.impot).subscribe(data => {
      this.response = data;
    });

  }

}
