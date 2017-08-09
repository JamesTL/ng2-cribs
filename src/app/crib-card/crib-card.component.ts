import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
//Dumb component only displays data passed into it -  re-usable in different contexts  - simoly pass in crib from a parent component
export class CribCardComponent implements OnInit {

  @Input ('crib') crib:any; //accpet binding called '(crib)  ans assing to local variable  crib

  constructor() {
  }

  ngOnInit() {
  }

}
