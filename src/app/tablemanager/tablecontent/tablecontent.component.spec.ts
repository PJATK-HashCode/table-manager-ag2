import { TestBed, inject } from '@angular/core/testing';

import { TablecontentComponent } from './tablecontent.component';

describe('a tablecontent component', () => {
	let component: TablecontentComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TablecontentComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TablecontentComponent], (TablecontentComponent) => {
		component = TablecontentComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});