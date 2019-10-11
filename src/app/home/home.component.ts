import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    clickCounter: number = 0;
    name: string = '';  // add this
    constructor() { }
    ngOnInit() {
    }
    countClick() {
        this.clickCounter += 1;
    }
   setClasses(){
       let myClasses ={
           active: this.clickCounter > 2,
           noactive :this.clickCounter < 2,
       }
       return myClasses;
   }
}
