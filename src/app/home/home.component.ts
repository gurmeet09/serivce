import {Component, OnInit} from '@angular/core';
import {RatingComponent} from '../rating/rating.component';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {
  usepipe : boolean = false;
  searchText : any;
  rating: any;
  constructor() {}

  // tslint:disable-next-line:member-ordering
  names = [
    {
      'id': 1,
      'name': 'Jason',
      'email': 'Martin@gmail.com',
      'rating': ''
    }, {
      'id': 2,
      'name': 'Douglas',
      'email': 'Holmes@gmail.com',
      'rating': ''
    }, {
      'id': 3,
      'name': 'Randy',
      'email': 'Woods@gmail.com',
      'rating': ''
    }
  ];

  sort() {
    this.usepipe = !this.usepipe;
  }
  ngOnInit() {}
  ratingComponetClick(clickObj: any): void {
    console.log(`The Item ${clickObj.itemId}
        has been given ${clickObj.rating}`);
        this.rating = clickObj.rating;
  }
}
