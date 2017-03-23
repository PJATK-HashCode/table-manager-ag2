import { Component, OnInit, Input } from '@angular/core';
import { TableContent } from '../tablemanager/tablecontent/tablecontent.content'

@Component({
	selector: 'testcontent',
	templateUrl: 'testcontent.component.html'
})

export class TestContentComponent implements OnInit, TableContent {

	@Input() data:any;

	ngOnInit() { }
}