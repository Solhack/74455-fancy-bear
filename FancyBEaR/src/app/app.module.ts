import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Terminal } from 'xterm';


@NgModule({
  declarations: [		
    AppComponent,
    PageComponent,
      RegisterComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Terminal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
