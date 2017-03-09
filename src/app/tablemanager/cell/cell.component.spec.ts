import { TestBed, inject } from '@angular/core/testing';

import { CellComponent } from './cell.component';

describe('a cell component', () => {
	let component: CellComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CellComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CellComponent], (CellComponent) => {
		component = CellComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});