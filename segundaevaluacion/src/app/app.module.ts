import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExbuttonComponent } from './exbutton/exbutton.component';
import { ExsecondViewComponent } from './exsecond-view/exsecond-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ExbuttonComponent,
    ExsecondViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
