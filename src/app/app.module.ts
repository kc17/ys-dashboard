import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YsPieModule } from 'ys-pie';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YsPieModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
