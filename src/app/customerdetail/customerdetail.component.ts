import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {
  title: any;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.title = this.service.getUsers();
    console.log('hello', this.title);
  }
  }
