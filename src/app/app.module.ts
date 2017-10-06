import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { route } from './app.routes';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { NamesortPipe } from './namesort.pipe';
import { NamesearchPipe } from './namesearch.pipe';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerdetailComponent,
    CustomerlistComponent,
    NamesortPipe,
    NamesearchPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( route )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
