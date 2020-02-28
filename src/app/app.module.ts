import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipingPipe } from './piping.pipe';
import { AnotherpipePipe } from './anotherpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipingPipe,
    AnotherpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
