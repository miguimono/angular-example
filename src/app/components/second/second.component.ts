import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 @Input() nameSecond;
 title: string = "Segundo";

  constructor() { }

  ngOnInit(): void {
  }

}
