import { Component, OnInit } from '@angular/core';
import { Sixth } from '../sixth/sixth.model';
@Component({
  selector: 'fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  links: Sixth[];

  constructor() { 
    this.links = [
      new Sixth("Angular", "http://angular.io", 60),
      new Sixth("Vue", "https://vuejs.org", 100),
      new Sixth("React", "https://es.reactjs.org", 75)
    ]
    console.log(this.links);
  }
  addLink(title: HTMLInputElement, link:HTMLInputElement){
    this.links.push(new Sixth(title.value, link.value));
    title.value = '';
    link.value = '';

    return false;
  }

 

  ngOnInit(): void {
  }

}
