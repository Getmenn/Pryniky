import { useState } from 'react';
import './additionData.scss'
import { prynikyApi } from '../../../../api/prynikyApi';
import { Button, TextField } from '@mui/material';

interface IAdditionData{
    setVisableAddition: (visableAddition: boolean) => void;
}

const AdditionData: React.FC<IAdditionData> = ({setVisableAddition}) => {

    const [documentStatus, setDocumentStatus] = useState<string>('');
    const [employeeNumber, setEmployeeNumber] = useState<string>('');
    const [documentType, setDocumentType] = useState<string>('');
    const [documentName, setDocumentName] = useState<string>('');
    const [employeeSignatureName, setEmployeeSignatureName] = useState<string>('');
    const [employeeSigDate, setEmployeeSigDate] = useState<string>('');
    const [companySignatureName, setCompanySignatureName] = useState<string>('');
    const [companySigDate, setCompanySigDate] = useState<string>('');

    const newRow = {
        documentStatus,
        employeeNumber,
        documentType,
        documentName,
        employeeSignatureName,
        employeeSigDate,
        companySignatureName,
        companySigDate
    };

    const handleAddRow = async () => { //отправляем новый элемент на сервер
        prynikyApi.addRow(newRow)
        setVisableAddition(false)
    }

    return (
        <>
            <form className="additionData" onSubmit={handleAddRow}>
                <h1>Добавление новой записи</h1>
                
                <TextField
                    sx={{width: '90%'}}    
                    label="Введите статус"
                    variant="outlined"
                    value={documentStatus}
                    onChange={(e) => setDocumentStatus(e.target.value)}
                    required
                />
                <TextField
                    sx={{width: '90%'}}    
                    label="Введите номер"
                    variant="outlined"
                    value={employeeNumber}
                    onChange={(e) => setEmployeeNumber(e.target.value)}
                    required
                />
                <TextField
                    sx={{width: '90%'}}    
                    label="Введите тип документа"
                    variant="outlined"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    required
                />
                <TextField
                    sx={{width: '90%'}}    
                    label="Введите название документа"
                    variant="outlined"
                    value={documentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                    required
                />
                <TextField   
                    sx={{width: '90%'}}        
                    label="Введите подпись сотрудника"
                    variant="outlined"
                    value={employeeSignatureName}
                    onChange={(e) => setEmployeeSignatureName(e.target.value)}
                    required
                />
                <TextField      
                    sx={{width: '90%'}}        
                    label="Введите дату подписи сотрудника"
                    variant="outlined"
                    type='date'
                    InputLabelProps={{ shrink: true }}
                    value={employeeSigDate.slice(0, 10)}
                    onChange={(e) => setEmployeeSigDate(new Date(e.target.value).toISOString())}
                    required
                />
                <TextField    
                    sx={{width: '90%'}}        
                    label="Введите подпись компании"
                    variant="outlined"
                    value={companySignatureName}
                    onChange={(e) => setCompanySignatureName(e.target.value)}
                    required
                />
                <TextField  
                    sx={{width: '90%'}}    
                    label="Введите дату подписи компании"
                    variant="outlined"
                    type='date'
                    InputLabelProps={{ shrink: true }}
                    value={companySigDate.slice(0, 10)}
                    onChange={(e) => setCompanySigDate(new Date(e.target.value).toISOString())}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ marginTop: '15px' }}
                >
                    Добавить
                </Button>
            </form>
            <div className="overlay" onClick={() => setVisableAddition(false)} />
        </>
    )
}

export {AdditionData}