import { TestBed, inject } from '@angular/core/testing';

import { Testcomponent2Component } from './testcomponent2.component';

describe('a testcomponent2 component', () => {
	let component: Testcomponent2Component;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				Testcomponent2Component
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([Testcomponent2Component], (Testcomponent2Component) => {
		component = Testcomponent2Component;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});