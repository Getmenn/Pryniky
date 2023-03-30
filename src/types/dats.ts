
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
    addRow: (newRow: ITableData) => void;
    deleteRow: (id: string) => void;
}

export type TokenType = IResponse<ITokenData>;
export type DateType = IResponse<ITableData[]>;

///////////////////