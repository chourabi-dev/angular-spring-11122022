import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
 // { path:'', component:HomeComponent },


  { path:'', redirectTo:'home', pathMatch:'full' }, 
  { path:'home' , component:HomeComponent }, 

  { path:'about' , component:AboutComponent,   children: [  
    { path:'team', component:TeamComponent },
    { path:'services', component:ServicesComponent }, 

   ]
   ,

   
  },
  { path:'user/:id' , component:UserComponent, canActivate: [ AuthGuard] }, 
  { path:'**' , component:NotFoundComponent }, // wild card


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
