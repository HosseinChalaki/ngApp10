import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x: number;

  constructor() { }

  ngOnInit() {
    this.x = 0;
  }

  onClick(){
    this.x = 1;
  }

}
