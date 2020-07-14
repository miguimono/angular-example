import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Sixth } from './sixth.model';
@Component({
  selector: 'sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
@Input() link: Sixth;
@HostBinding('attr.class') cssClass = 'row bg-dark';
  constructor() { }

  ngOnInit(): void {
    
  }

}
