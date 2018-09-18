import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import {
    IRowData,
} from '../../contracts/row-data.interface';

@Component({
    selector: 'app-row-state',
    templateUrl: 'row-state.component.html',
    styleUrls: ['./row-state.component.css']
})

export class RowStateComponent implements OnInit {
    @Input() row: IRowData;

    public isRequired = false;
    public isLocked = false;

    constructor() { }

    ngOnInit() {
    }
}
