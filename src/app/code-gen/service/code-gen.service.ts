import { Injectable } from '@angular/core';
import { FieldDefinitionTemplates } from 'src/app/enums/field-definition.enum';

@Injectable()
export class CodeGenService {
  private fieldWrapper = `
    <div class="align-left">
      <div>case DisplayField.ZZGENZZ:</div>
      ZZFIELDZZ
    </div>
  `;
  private noFieldAvailableResult = `
    <div class="indent-return">// NO FIELD FOR YOU YET BUT HERE'S A START</div>
    <div class="indent-return">return null;</div>
  `;

  public getField(displayName: string, fieldTypeId: string): string {
    if (!fieldTypeId) { return ''; }
    const numberFieldTypeId = parseInt(fieldTypeId, 10);
    const fieldString = FieldDefinitionTemplates[numberFieldTypeId] ? FieldDefinitionTemplates[numberFieldTypeId] : this.noFieldAvailableResult;
    displayName = displayName.charAt(0).toUpperCase() + displayName.substr(1);
    return this.fieldWrapper.replace(/ZZGENZZ/g, displayName).replace(/ZZFIELDZZ/g, fieldString);
  }
}
