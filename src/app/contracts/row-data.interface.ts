export interface IRowData {
    id?: number;
    sectionId?: number;
    isRequired: boolean;
    isLocked: boolean;
    sequenceNumber?: number;
    name: string;
    systemName: string;
    typeId: number;
    propertyId: number;
    numberOfColumns: number;
}
