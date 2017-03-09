import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CellComponent }  from './cell.component';

@NgModule({
    declarations: [ CellComponent ],
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule
     ],
    providers: [],
    bootstrap: [ CellComponent ]
})
export class CellComponent {}