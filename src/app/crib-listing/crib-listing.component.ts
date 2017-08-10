import {Component, OnInit} from '@angular/core';
import {CribsService} from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit { //ability to do something whenever this componet get initialised - lifecycle hook

  cribs: Array<any>;
  error: string;


  //inject http into component -  inject dependency into pass Http to privaate var http to be used in component
  constructor(private cribsService: CribsService) {

  }

  ngOnInit() {

    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    )
  }
}
