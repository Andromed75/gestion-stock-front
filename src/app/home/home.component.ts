import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stud: string;
  studList: Array<string> = new Array;
  grouplilst;
  rawList: ListDto = new ListDto;
  isLoaded = false;


  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  addStudToList() {
    console.log(this.stud);

    this.studList.push(this.stud);
    this.stud === '';
  }

  getMyGroups(){
    this.rawList.rawList = this.studList;
    this.homeService.randomize(this.rawList).subscribe(data => {this.grouplilst = data; console.log(data); this.isLoaded = true;
    }, err => console.log(err));
  }

logList() {
  console.log(this.studList);
}



}

export class PairDto {
  studOne: string;
  studTwo: string;
}

export class ListDto {
  rawList: Array<string>;
}
