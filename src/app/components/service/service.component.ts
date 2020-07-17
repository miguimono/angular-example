import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  posts:any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data=>{
      this.posts = data;   
    });
  }
  getDataById(i){
    return this.posts[i];
  }
  ngOnInit(): void {
  }

}
