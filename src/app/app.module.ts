import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './home/gilles30/www/Project/curso-angular/my-component/my-component.component';
import { MyComponent1Component } from './home/gilles30/www/Project/curso-angular/primeiro-projeto/src/my-component1/my-component1.component';

@NgModule({
  declarations: [		
    AppComponent,
      MyComponentComponent,
      MyComponent1Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
