import { Component, OnInit, Input } from '@angular/core';
import { TableContent } from '../tablemanager/tablecontent/tablecontent.content'

@Component({
	selector: 'testcomponent2',
	templateUrl: 'testcomponent2.component.html'
})

export class Testcomponent2Component implements OnInit, TableContent {

	@Input() data:any;

	ngOnInit() { }
}