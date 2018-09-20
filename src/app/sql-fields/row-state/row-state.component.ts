import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

import { IRowData } from '../../contracts/row-data.interface';

@Component({
    selector: 'app-row-state',
    templateUrl: 'row-state.component.html',
    styleUrls: ['./row-state.component.css']
})

export class RowStateComponent implements OnInit {
    @Input() row: IRowData;

    public readonly fieldOptions: {id: number, name: string}[] = [
      {id: 1, name: 'Agency'},
      {id: 2, name: 'Checkbox'},
      {id: 3, name: 'Checked Master File'},
      {id: 4, name: 'Combobox'},
      {id: 5, name: 'Date'},
      {id: 6, name: 'Functional Set'},
      {id: 7, name: 'General Vehicle'},
      {id: 8, name: 'Geo Verify'},
      {id: 9, name: 'Global Vehicle'},
      {id: 10, name: 'Grouped Controls'},
      {id: 11, name: 'Height Range'},
      {id: 12, name: 'Text Box'},
      {id: 13, name: 'Location Search'},
      {id: 14, name: 'Master File'},
      {id: 15, name: 'Multi-Select'},
      {id: 16, name: 'Notes'},
      {id: 17, name: 'Numeric'},
      {id: 18, name: 'Partial Name'},
      {id: 19, name: 'Radio Buttons'},
      {id: 20, name: 'Rich Text'},
      {id: 21, name: 'Subject Search'},
      {id: 22, name: 'Text Area'},
      {id: 23, name: 'Time'},
      {id: 24, name: 'Time Range'},
      {id: 25, name: 'Type/Make/Model'},
      {id: 26, name: 'Validation Set'},
      {id: 28, name: 'Year-Based Input'},
      {id: 29, name: 'Phone Number'},
      {id: 30, name: 'View-Only Field'},
      {id: 31, name: 'Global Subject'},
      {id: 32, name: 'Height'},
      {id: 34, name: 'Year-Based Counter'},
      {id: 35, name: 'Date/Time'},
      {id: 36, name: 'Record List'},
      {id: 37, name: 'Gun Make/Model'},
      {id: 38, name: 'Social Security Number'},
      {id: 39, name: 'Numeric Range'},
      {id: 40, name: 'Photo Viewer'},
      {id: 41, name: 'Date Range'},
      {id: 42, name: 'Global Subject Contact Information'},
      {id: 43, name: 'Scar/Mark/Tattoo Type'},
      {id: 44, name: 'Hyperlink Field'},
      {id: 45, name: 'Free-Form Master File'},
      {id: 47, name: 'Module Selector'},
      {id: 48, name: 'Contact Information'},
      {id: 49, name: 'Counter'},
      {id: 50, name: 'Statute'},
      {id: 51, name: 'General Subject'},
      {id: 52, name: 'Global Gun'},
      {id: 53, name: 'Documents'},
      {id: 54, name: 'Statute Quick View'},
      {id: 55, name: 'Type Ahead'},
      {id: 56, name: 'Statute Search'},
      {id: 57, name: 'Equipment'},
      {id: 58, name: 'Global Vehicle Viewer'},
      {id: 59, name: 'Global Subject Viewer'},
      {id: 60, name: 'Decimal'},
      {id: 61, name: 'Global Subject Search'},
      {id: 62, name: 'Narcotics Unit/Teams'},
      {id: 63, name: 'Hazardous Material Viewer'},
      {id: 64, name: 'Time Entry Viewer'},
    ];

    public isRequired = false;
    public isLocked = false;
    public myControl = new FormControl();
    public filteredOptions: Observable<any[]>;

    constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): {id: number; name: string; }[] {
    const filterValue = value.toLowerCase();
    return this.fieldOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public optionSelected(event: any): void {
    this.row.typeId = this.fieldOptions.find(x => x.name === event.option.value).id;
  }
}
