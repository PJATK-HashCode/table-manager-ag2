import { Component, Input, DoCheck, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { TableCell } from './tablecontent.cell';
import { TableDirective } from './tablecontent.directive';
import { TableContent } from './tablecontent.content';

@Component({
	selector: 'tablecontent',
	templateUrl: 'tablecontent.component.html',
	styleUrls: ['./tablecontent.component.css']
})

export class TablecontentComponent implements DoCheck {

	@Input('cell') uncheckedCellWithContent:TableCell;
	private _cellWithContent:TableCell;
	@ViewChild(TableDirective) cellHost:TableDirective;

	constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

	ngDoCheck() {
		if(this.uncheckedCellWithContent !== this._cellWithContent){
			this._cellWithContent = this.uncheckedCellWithContent;
			this.loadCell();
		}
	}

	private loadCell() {

			let componentFactory
					= this._componentFactoryResolver.resolveComponentFactory(this._cellWithContent.component);
		
			let viewContainerRef = this.cellHost.viewContainerRef;
			viewContainerRef.clear();
			
			let componentRef = viewContainerRef.createComponent(componentFactory);
			(<TableContent>componentRef.instance).data = this._cellWithContent.data;
	}
}