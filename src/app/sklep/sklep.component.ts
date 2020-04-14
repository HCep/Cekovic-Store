import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sklep',
  templateUrl: './sklep.component.html',
  styleUrls: ['./sklep.component.css']
})



export class SklepComponent  {

classApplied = false;


toggleClass(){
  this.classApplied = !this.classApplied;
}
}
