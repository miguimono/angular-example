import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  show:boolean = true;
  activo:string;
  animals: Array<any>=[
    {type:'Perro', name:'Perron', age: 10},
    {type:'Gato', name:'Gaton', age: 5},
    {type:'Pat', name:'Paton', age: 2}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
