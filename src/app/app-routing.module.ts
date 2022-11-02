import { NgModule } from '@angular/core';
import { NavigationCancellationCode, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { UpdateComponent } from './pages/update/update.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'create',
        component:CreateComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'update/:eId',
        component:UpdateComponent
      }

    ]
  },
  {
    path:'navbar',
    component:NavbarComponent,
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
