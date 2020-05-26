import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { IntergalacticComponent } from './components/intergalactic/intergalactic.component';
import { InterplanetComponent } from './components/interplanet/interplanet.component';
import { CrewComponent } from './components/crew/crew.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    IntergalacticComponent,
    InterplanetComponent,
    CrewComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
