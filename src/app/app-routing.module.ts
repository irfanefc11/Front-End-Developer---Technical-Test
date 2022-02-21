import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
const routes: Routes = [

{path:'signup', component:UserComponent,
children:[{path:'', component:SignUpComponent}]
},

{path:'login', component:UserComponent,
children:[{path:'', component:SignInComponent}]
},

{path:'', redirectTo:'/login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
