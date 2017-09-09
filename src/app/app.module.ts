import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

// Modules
import {
  MdToolbarModule,
  MdMenuModule,
  MdIconModule,
  MdButtonModule
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Routes
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
