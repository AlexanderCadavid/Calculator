import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { SubtractComponent } from './components/subtract/subtract.component';
import { MultiplyComponent } from './components/multiply/multiply.component';
import { DivisionComponent } from './components/division/division.component';
import { ModComponent } from './components/mod/mod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SubtractComponent,
    MultiplyComponent,
    DivisionComponent,
    ModComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
