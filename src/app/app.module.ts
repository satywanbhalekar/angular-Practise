import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { HelpComponent } from './MyComponent/help/help.component';
import { TwoWayDatabindingComponent } from './MyComponent/two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './MyComponent/form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    TwoWayDatabindingComponent,
    FormComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
