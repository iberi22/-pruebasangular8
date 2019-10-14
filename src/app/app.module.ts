import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgifComponent } from './ngif/ngif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgularmaterialComponent } from './agularmaterial/agularmaterial.component';
import { MatButtonModule } from '@angular/material';
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NgifComponent,
    AgularmaterialComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
