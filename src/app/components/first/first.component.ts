import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title= "Primero";
  users= ["Miguel", "Angel", "Niño", "Suarez", "Yuly"];  
  activated: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
