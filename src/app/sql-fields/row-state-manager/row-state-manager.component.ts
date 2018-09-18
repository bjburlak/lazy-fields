import {
    Component,
    OnInit,
} from '@angular/core';

import {
    IRowData,
} from '../../contracts/row-data.interface';

@Component({
    selector: 'app-row-state-manager',
    templateUrl: 'row-state-manager.component.html',
    styleUrls: ['./row-state-manager.component.scss']
})

export class RowStateManagerComponent implements OnInit {
    public rowMap: {[id: number]: IRowData} = {};

    public sectionId: number = null;
    public sectionName = '';

    public rows: IRowData[] = [];

    constructor() { }

    ngOnInit() { }

    public addRow(): void {
        const keyCount = Object.keys(this.rowMap).length;
        this.rows.push(<IRowData>{
            isRequired: false,
            isLocked: false,
        });
        this.rowMap[keyCount] = <IRowData>{};
    }
}
