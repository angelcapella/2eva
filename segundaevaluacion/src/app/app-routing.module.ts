import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EXButtonComponent } from './exbutton/exbutton.component';
import { ExsecondViewComponent } from './exsecond-view/exsecond-view.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  {path:'button', component:EXButtonComponent},
  {path:'second-view', component:ExsecondViewComponent},
  {path:'home', component:AppComponent},
  {path:'nav', component:NavComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
