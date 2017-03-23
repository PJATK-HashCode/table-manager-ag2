import { Component } from '@angular/core';
import { TablemanagerComponent } from './tablemanager/tablemanager.component';
import { TableCell } from './tablemanager/tablecontent/tablecontent.cell';
import { TableCoordinate } from './tablemanager/tablecontent/tablecontent.coordinate';
import { TestContentComponent } from './testcontent/testcontent.component';
import { Testcomponent2Component } from './testcomponent2/testcomponent2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
x:number = 100;
y:number = 100;
content:string = '';

public cell:TableCell ;/*= new TableCell(
                          new TableCoordinate(this.x,this.y),
                          TestContentComponent,
                          this.content
                        );*/

public newCell() {

  this.cell = new TableCell(
        new TableCoordinate(this.x,this.y),
        Testcomponent2Component,
        this.content
      );
}


}
