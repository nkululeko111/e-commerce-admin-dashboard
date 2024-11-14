
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export { routes };

