import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { }


  links: String[];
  
  addLink(title: HTMLInputElement, link:HTMLInputElement){
    console.log("Datos:" , title.value, link.value);
    return false;
  }

 
  ngOnInit(): void {
  }

}
