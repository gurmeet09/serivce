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
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerdetailComponent,
    CustomerlistComponent,
    NamesortPipe,
    NamesearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( route )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
