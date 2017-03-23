import { TestBed, inject } from '@angular/core/testing';

import { TestcontentComponent } from './testcontent.component';

describe('a testcontent component', () => {
	let component: TestcontentComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TestcontentComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TestcontentComponent], (TestcontentComponent) => {
		component = TestcontentComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});