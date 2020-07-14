import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
title: string = "Cuarto";
users: string[] = ["Luis", "Eduardo", "Piña", "Jimenez"];
name:string = "Miguel";
age: number= 28;

sayHello(){
  alert('Hola!');
}
sayUser(user){
  alert(user);
}
deleteUser(user){
  for (let i = 0; i < this.users.length; i++) {
    if (user == this.users[i]) {
      this.users.splice(i,1);
    }    
  }
}
addUser(newUser){
  this.users.push(newUser.value);
 newUser.value  = '';
 newUser.focus;

return false;
}
posts = [];



  ngOnInit(): void {
  }

 }
