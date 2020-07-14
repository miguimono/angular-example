import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
title: string = "Tercero";
name: string = "MIGUEL";
age: number;
address : {
  street: string;
  city: string;
}
hobbies: string[];

  constructor() { 
    this.age= 28;
    this.address = {
      street: "Cll falsa 123",
      city: "Tunja"
    }
    this.hobbies = [
      'swimming',
      'sing',
      'read'
    ]
  }

  ngOnInit(): void {
  }

}

