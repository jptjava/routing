import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UploadService } from './upload.service';
import { InouttestComponent } from './inouttest/inouttest.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, InouttestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UploadService]
})
export class AppModule { }
