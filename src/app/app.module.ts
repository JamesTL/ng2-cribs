import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';


//defines strucutre of app
@NgModule({
  // let app know abou tcompets hat we have created/or added from thirdparty
  declarations: [
    AppComponent,
    CribListingComponent,//ng g component crib-card
    CribCardComponent //this was  auto added using the ng cli
  ],
  imports: [ //list angular specific modules
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //register injectable services
  providers: [],
  bootstrap: [AppComponent] //which componen tis the top level (main) componet of application .Allother componetnes will be child components of this oone
})
export class AppModule { }
