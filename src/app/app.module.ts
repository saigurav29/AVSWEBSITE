import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridDataModule } from './Component/Shared/grid-data/grid-data.module';
import { MainComponent } from './Component/Shared/main/main.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AddflatComponent } from './Component/addflat/addflat.component';
import { FlatlistComponent } from './Component/flatlist/flatlist.component';
import { LabourmasterComponent } from './Component/labourmaster/labourmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GridDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
