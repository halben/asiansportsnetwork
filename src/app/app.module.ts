import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

// Modules
import {
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdButtonModule,
  MdIconModule,
  MdLineModule, MdLine
} from '@angular/material';

// Components
import { AppComponent } from './app.component';

// Routes
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdLineModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
