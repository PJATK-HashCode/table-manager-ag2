import { Component, Input } from '@angular/core';

import { TableCell } from './tablecontent/tablecontent.cell';

@Component({
	selector: 'tablemanager',
	templateUrl: 'tablemanager.component.html',
	styleUrls: ['./tablemanager.component.css'],
})



export class TablemanagerComponent{

	private _listOfCells:TableCell[] = [];

	@Input()
	set addNewCell(cell:TableCell) {
		if(cell != null)
			this._listOfCells.push(cell);
	}


}