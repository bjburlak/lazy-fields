import { Injectable } from '@angular/core';

@Injectable()
export class CodeGenService {
  private fieldMap: {[id: number]: string} = {};


  constructor() {
    this.fieldMap[26] = `
    <div class="align-left">
    <div>case DisplayField.ZZGENZZ:</div>
    <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.ValidationSetController({</div>
    <div class="indent-options">fieldId: DisplayField.ZZGENZZ,</div>
    <div class="indent-options">isRequired: field.isRequired,</div>
    <div class="indent-options">label: field.name,</div>
    <div class="indent-options">name: field.systemName,</div>
    <div class="indent-options">applyDefaultValue: shouldApplyDefault</div>
    <div class="indent-return">}));</div>
    </div>
    `;
    this.fieldMap[17] = `
      <div class="align-left">
      <div>case DisplayField.ZZGENZZ:</div>
      <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.NumericController({</div>
      <div class="indent-options">isRequired: field.isRequired,</div>
      <div class="indent-options">label: field.name,</div>
      <div class="indent-options">name: field.systemName,</div>
      <div class="indent-options">min: 0, // Minimum Value,</div>
      <div class="indent-options">max: 1 // Maximum Value</div>
      <div class="indent-return">}));</div>
      </div>
    `;
    this.fieldMap[22] = `
      <div class="align-left">
      <div>case DisplayField.ZZGENZZ:</div>
      <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.TextareaController({</div>
      <div class="indent-options">name: field.systemName,</div>
      <div class="indent-options">label: field.name,</div>
      <div class="indent-options">isRequired: field.isRequired,</div>
      <div class="indent-options">maxLength: 1 // Maximum Character Count,</div>
      <div class="indent-return">}));</div>
      <div>
    `;
  }

  public getField(displayName: string, fieldTypeId: string): string {
    if (!fieldTypeId) { return ''; }
    const numberFieldTypeId = parseInt(fieldTypeId, 10);
    if (!this.fieldMap[numberFieldTypeId]) {
      return '';
    }
    const fieldString = this.fieldMap[numberFieldTypeId];
    displayName = displayName.charAt(0).toUpperCase() + displayName.substr(1);
    return fieldString.replace(/ZZGENZZ/g, displayName);
  }
}
