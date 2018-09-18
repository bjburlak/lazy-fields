import { Component, Input, OnChanges } from '@angular/core';

import { StripPipe } from '../pipes/strip-space.pipe';
import { CodeGenService } from './service/code-gen.service';

@Component({
  selector: 'app-code-gen',
  templateUrl: 'code-gen.component.html',
  styleUrls: ['./code-gen.component.scss']
})

export class CodeGenComponent implements OnChanges {
  @Input() fieldTypeId: string;
  @Input() sectionName: string;
  @Input() displayName: string;

  public value = '';

  private _stripPipe: StripPipe;

  constructor(
    private _codeGenService: CodeGenService
  ) {
    this._stripPipe = new StripPipe();
  }

  ngOnChanges(): void {
    const stripDisplayName = this._stripPipe.transform(this.displayName);
    this.value = this._codeGenService.getField(`${this.sectionName}${stripDisplayName}`, this.fieldTypeId);
  }
}
