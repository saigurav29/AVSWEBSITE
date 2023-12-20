import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { MainComponent } from 'src/app/Component/Shared/main/main.component';
import { DashboardComponent } from 'src/app/Component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridDataModule } from 'src/app/Component/Shared/grid-data/grid-data.module';
import { AddflatComponent } from 'src/app/Component/addflat/addflat.component';
import { FlatlistComponent } from 'src/app/Component/flatlist/flatlist.component';
import { LabourmasterComponent } from 'src/app/Component/labourmaster/labourmaster.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AddflatComponent,
    FlatlistComponent,
    LabourmasterComponent,
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GridDataModule,
  ]
})
export class RootModule { }
