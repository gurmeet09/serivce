import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

export const route: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customerdetail', component: CustomerdetailComponent},
  {path: 'customerlist', component: CustomerlistComponent},
]
