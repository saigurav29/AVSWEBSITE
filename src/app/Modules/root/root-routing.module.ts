import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/Component/Shared/main/main.component';
import { AddflatComponent } from 'src/app/Component/addflat/addflat.component';
import { DashboardComponent } from 'src/app/Component/dashboard/dashboard.component';
import { FlatlistComponent } from 'src/app/Component/flatlist/flatlist.component';
import { LabourmasterComponent } from 'src/app/Component/labourmaster/labourmaster.component';

const routes: Routes = [
  {path:"",component:MainComponent,
children:[
  {path:"dashboard",component:DashboardComponent},
  {path:"addflat",component:AddflatComponent},
  {path:"flatlist",component:FlatlistComponent},
  {path:"labourmaster",component:LabourmasterComponent},

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
