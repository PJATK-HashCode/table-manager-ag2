import { TestBed, inject } from '@angular/core/testing';

import { TablemanagerComponent } from './tablemanager.component';

describe('a tablemanager component', () => {
	let component: TablemanagerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TablemanagerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TablemanagerComponent], (TablemanagerComponent) => {
		component = TablemanagerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});