import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCardModule } from '@angular/material/card';
//import { MatCardModule } from '@angular/material/card';
import { BodyModule } from './body/body.module';
import { ReadjsonComponent } from './readjson/readjson.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ReadjsonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BodyModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
