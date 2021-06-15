import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EXButtonComponent } from './exbutton/exbutton.component';
import { ExsecondViewComponent } from './exsecond-view/exsecond-view.component';
import { NavComponent } from './nav/nav.component';
import { ExthirdViewComponent } from './exthird-view/exthird-view.component';
import { ExfourthViewComponent } from './exfourth-view/exfourth-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EXButtonComponent,
    ExsecondViewComponent,
    NavComponent,
    ExthirdViewComponent,
    ExfourthViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
