import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitesDetailComponent } from './cites/cites-detail/cites-detail.component';
import { CitesListComponent } from './cites/cites-list/cites-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cites',
  canActivate: [AuthGuard],
   component: CitesListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cita/:id', component: CitesDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
