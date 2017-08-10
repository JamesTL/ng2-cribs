import {Component, OnInit} from '@angular/core';
import {CribsService} from './../services/cribs.service';
import {UtilService} from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit { //ability to do something whenever this componet get initialised - lifecycle hook

  cribs: Array<any>;
  error: string;
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  sortDirection:string = 'asc';
  sortField:string ='Price';



  //inject http into component -  inject d=ependency into pass Http to privaate var http to be used in component
  constructor(private cribsService: CribsService,
              private utilService: UtilService) {
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
