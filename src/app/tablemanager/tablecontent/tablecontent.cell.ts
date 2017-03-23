import { Type } from '@angular/core';
import { TableCoordinate } from './tablecontent.coordinate';

export class TableCell
{

    public constructor(
            public coordinates:TableCoordinate,
            public component: Type<any>,
            public data: any
        ) {}
}