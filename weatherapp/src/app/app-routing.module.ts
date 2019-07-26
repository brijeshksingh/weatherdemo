import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';


const appRoutes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'setting', component: SettingComponent
  },
  {
    path: 'home', component: HomeComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
