
/////////////////API

interface ITokenData {
    token: string;
}
  
interface IResponse<T>{
    data: T;
    error_code: number;
    error_message: string;
}

export interface ITableData {
    companySigDate: string;
    companySignatureName: string;
    documentName: string;
    documentStatus: string;
    documentType: string;
    employeeNumber: string;
    employeeSigDate: string;
    employeeSignatureName: string;
    id?: string;
}

export interface IPrynikyApi {
    getToken: (username: string, password: string) => Promise<TokenType>;
    getData: () => Promise<DateType>;
    addRow: (newRow: ITableData) =>  void;
    deleteRow: (id: string) => void;
    reloadRow: (id: string, newRow: ITableData) => void;
}

export type TokenType = IResponse<ITokenData>;
export type DateType = IResponse<ITableData[]>;
//export type newRowType = IResponse<ITableData>;

/////////////////Redux

export interface IStateData{
    data: ITableData[],
}

export enum loadTypes{
    SET_DATA = 'SET_DATA',
    ADD_ROW = 'ADD_ROW',
    DELETE_ROW = 'DELETE_ROW',
    CLEAN_DATA = 'CLEAN_DATA'
}

interface setData{
    type: loadTypes.SET_DATA;
    payload: ITableData[]
}

interface addRow{
    type: loadTypes.ADD_ROW;
    payload: ITableData
}

interface deleteRow{
    type: loadTypes.DELETE_ROW;
    payload: string
}

interface cleanData{
    type: loadTypes.CLEAN_DATA;
}

export type actions = setData | addRow | deleteRow | cleanData

//////////////Elements

export interface ITableCell{
    item: string;
    id: string | undefined;
    name: string;
}

export interface ITableRow{
    element: ITableData;
}

export interface ITableProps{
    data: ITableData[];
}

export interface IAdditionData{
    setVisableAddition: (visableAddition: boolean) => void;
}

export interface IBody{
    loginVisable: boolean;
}

export interface IHeader{
    setLoginVisable:(loginVisable: boolean) => void;
    loginVisable: boolean
}