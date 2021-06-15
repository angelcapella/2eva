import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EXButtonComponent } from './exbutton/exbutton.component';
import { ExsecondViewComponent } from './exsecond-view/exsecond-view.component';
import { NavComponent } from './nav/nav.component';
import { ExthirdViewComponent } from './exthird-view/exthird-view.component';
import { ExfourthViewComponent } from './exfourth-view/exfourth-view.component';

const routes: Routes = [
  {path:'button', component:EXButtonComponent},
  {path:'second-view', component:ExsecondViewComponent},
  {path:'home', component:AppComponent},
  {path:'nav', component:NavComponent},
  {path:'third-view' , component:ExthirdViewComponent},
  {path:'fourth-view' , component:ExfourthViewComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
