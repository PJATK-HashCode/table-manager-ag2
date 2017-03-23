import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[tablemanager-cell]',
})
export class TableDirective
{   

    public constructor(public viewContainerRef: ViewContainerRef) {}

}