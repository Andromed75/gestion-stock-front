import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  isCreated = false;
  client: ClientDto = new ClientDto();
  constructor(private service: GestionService) { }

  ngOnInit() {
  }

  createClient(){

    this.service.createClient(this.client).subscribe(
      data => {
        console.log(data);
        this.isCreated = true;
        this.client.nom = '';
      },
       err => console.log(err)
    );
  }

  recreate(){
    this.isCreated = !this.isCreated;
  }

}

export class ClientDto {
  nom: string;
}

