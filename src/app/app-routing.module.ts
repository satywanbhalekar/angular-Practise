import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';
import { ApiComponent } from './MyComponent/api/api.component';
import { FormComponent } from './MyComponent/form/form.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { SignupComponent } from './MyComponent/signup/signup.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard



const routes: Routes = [

  { path: 'user/about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent },
  { path: 'api', component: ApiComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
