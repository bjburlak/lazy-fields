import { Injectable } from '@angular/core';
import { FieldDefinition } from 'src/app/enums/field-definition.enum';

@Injectable()
export class CodeGenService {
  private fieldMap: {[id: number]: string} = {};


  constructor() {
    this.fieldMap[FieldDefinition.MasterFile] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>
          <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.MasterFileController({</div>
            <div class="indent-options">filter: [{ type: null , value: null }],</div>
            <div class="indent-options">isRequired: field.isRequired,</div>
            <div class="indent-options">label: field.name,</div>
            <div class="indent-options">masterFileType: null,</div>
            <div class="indent-options">name: field.systemName</div>
          <div class="indent-return">}));</div>
      </div>
    `;
    this.fieldMap[FieldDefinition.Combobox] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>
          <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.ComboboxController({</div>
            <div class="indent-options">name: field.systemName,</div>
            <div class="indent-options">label: field.name,</div>
            <div class="indent-options">isRequired: field.isRequired,</div>
            <div class="indent-options">dataSource: [],</div>
            <div class="indent-options">primaryDisplayField: '',</div>
            <div class="indent-options">valueField: ''</div>
          <div class="indent-return">}));</div>
      </div>
      `;
    this.fieldMap[FieldDefinition.FunctionalSet] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>

      </div>
      `;
    this.fieldMap[FieldDefinition.GeoVerify] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>
          <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.GeoVerifyController({</div>
            <div class="indent-options">name: field.systemName,</div>
            <div class="indent-options">label: field.name,</div>
            <div class="indent-options">isRequired: field.isRequired,</div>
          <div class="indent-return">}));</div>
      </div>
      `;
    this.fieldMap[FieldDefinition.GlobalVehicle] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>

      </div>
      `;
    this.fieldMap[FieldDefinition.HeightRange] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>

      </div>
      `;
    this.fieldMap[FieldDefinition.MultiSelect] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>

      </div>
      `;
    this.fieldMap[FieldDefinition.Numeric] = `
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
    this.fieldMap[FieldDefinition.TextArea] = `
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
    this.fieldMap[FieldDefinition.ValidationSet] = `
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
    this.fieldMap[FieldDefinition.DateTime] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>

      </div>
    `;
    this.fieldMap[FieldDefinition.SocialSecurityNumber] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>

      </div>
    `;
    this.fieldMap[FieldDefinition.TextBox] = `
      <div class="align-left">
        <div>case DisplayField.ZZGENZZ:</div>
          <div class="indent-return">return this._formInteropService.createField(formName, field.systemName, new this.InputController({</div>
            <div class="indent-options">name: field.systemName,</div>
            <div class="indent-options">label: field.name,</div>
            <div class="indent-options">isRequired: field.isRequired</div>
          <div class="indent-return">}));</div>
      </div>
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
