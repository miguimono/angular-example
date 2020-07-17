import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  @Input() data:any[];

  constructor(private route:ActivatedRoute) {
    
      this.route.params.subscribe(params=>{
        console.log(params['id']);
      })

  }
  ngOnInit(): void {
  }

}
