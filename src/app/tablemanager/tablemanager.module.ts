import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TablemanagerComponent }  from './tablemanager.component';
import { TableDirective } from './tablecontent/tablecontent.directive'
import { TablecontentComponent } from './tablecontent/tablecontent.component';

@NgModule({
    declarations: [ TablemanagerComponent, TableDirective, TablecontentComponent ],
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
     ],
    exports: [ TablemanagerComponent ],
    providers: [  ],
    
})
export class TablemanagerModule {}