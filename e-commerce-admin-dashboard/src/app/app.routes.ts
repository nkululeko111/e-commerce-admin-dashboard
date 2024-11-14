import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; 
import { ProductListComponent } from './product/product-list/product-list.component'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ProductListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export { routes };



