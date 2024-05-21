import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { FormComponent } from './MyComponent/form/form.component';
import { ApiComponent } from './MyComponent/api/api.component';


const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'api', component: ApiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
