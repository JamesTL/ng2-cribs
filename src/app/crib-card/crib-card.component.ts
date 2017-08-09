import {Component, OnInit, Input} from '@angular/core';
import {Crib} from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
//Dumb component only displays data passed into it -  re-usable in different contexts  - simoly pass in crib from a parent component
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib; // @Input decorator  used to accept  one-way data binding from parent  named '(crib)  and is assigned to local variable  crib

  constructor() {
  }

  //ngOnIt - life cycle hook - code completed
  ngOnInit() {

  }

//
}
