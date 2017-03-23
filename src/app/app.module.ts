import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TablemanagerModule } from './tablemanager/tablemanager.module';

import { TestContentComponent } from './testcontent/testcontent.component';
import { Testcomponent2Component } from './testcomponent2/testcomponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContentComponent,
    Testcomponent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TablemanagerModule
  ],
  entryComponents: [TestContentComponent, Testcomponent2Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
