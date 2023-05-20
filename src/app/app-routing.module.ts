import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavbarComponent } from './component/home-navbar/home-navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginPageComponent } from './component/login-page/login-page.component';

const routes: Routes = [
  {path:'',
  component: HomeComponent
 },
 {path:'home-navbar',
component:HomeNavbarComponent},
{path:'login-page',
component:LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
