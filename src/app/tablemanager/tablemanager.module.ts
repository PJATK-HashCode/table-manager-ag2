import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TablemanagerComponent }  from './tablemanager.component';

@NgModule({
    declarations: [ TablemanagerComponent ],
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule
     ],
     exports: [TablemanagerComponent],
    providers: [],
    bootstrap: [ TablemanagerComponent ]
})
export class TablemanagerComponent {}