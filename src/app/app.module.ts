import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TablemanagerModule } from './tablemanager/tablemanager.module';

import { TestContentComponent } from './testcontent/testcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TablemanagerModule
  ],
  entryComponents: [TestContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
