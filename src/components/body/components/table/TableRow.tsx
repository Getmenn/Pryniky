import { ITableRow } from "../../../../types/dats";
import { TableCell } from "./TableCell";
import { TableDelet } from "./TableDelet";

const TableRow: React.FC<ITableRow> = ({ element }) => {
 
  const {
    companySigDate,
    companySignatureName,
    documentName,
    documentStatus,
    documentType,
    employeeNumber,
    employeeSigDate,
    employeeSignatureName,
    id
  } = element

  return (
    <div className="tableRow">
      <TableCell item={companySigDate} id={id} name='companySigDate'/>
      <TableCell item={companySignatureName} id={id} name='companySignatureName'/>
      <TableCell item={documentName} id={id} name='documentName'/>
      <TableCell item={documentStatus} id={id} name='documentStatus'/>
      <TableCell item={documentType} id={id} name='documentType'/>
      <TableCell item={employeeNumber} id={id} name='employeeNumber'/>
      <TableCell item={employeeSigDate} id={id} name='employeeSigDate'/>
      <TableCell item={employeeSignatureName} id={id} name='employeeSignatureName'/>
      <TableDelet id={id} />
    </div>
  )
};

export {TableRow};