import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { StreetDefectListComponent } from './components/street-defect-list/street-defect-list.component';
import { NavComponent } from './components/nav/nav.component';

import { StreetDefectService } from './services/street-defect.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MapComponent,
    StreetDefectListComponent,
    NavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    StreetDefectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
