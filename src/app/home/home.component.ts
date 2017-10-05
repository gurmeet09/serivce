import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {
  usepipe : boolean = false;
  searchText : any;
  constructor() {}

  names = [
    {
      'id': 1,
      'name': 'Jason',
      'email': 'Martin@gmail.com'
    }, {
      'id': 2,
      'name': 'Douglas',
      'email': 'Holmes@gmail.com'
    }, {
      'id': 3,
      'name': 'Randy',
      'email': 'Woods@gmail.com'
    }
  ];

  sort() {
    this.usepipe = !this.usepipe;
  }
  ngOnInit() {}
}
