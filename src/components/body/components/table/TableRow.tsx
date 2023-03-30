import { ITableData } from "../../../../types/dats";
import { TableCell } from "./TableCell";
import { TableDelet } from "./TableDelet";

interface ITableRow{
  element: ITableData;
}

const TableRow: React.FC<ITableRow> = ({element}) => {
 
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
      <TableCell item={companySigDate} />
      <TableCell item={companySignatureName} />
      <TableCell item={documentName} />
      <TableCell item={documentStatus} />
      <TableCell item={documentType} />
      <TableCell item={employeeNumber} />
      <TableCell item={employeeSigDate} />
      <TableCell item={employeeSignatureName} />
      <TableDelet id={id} />
    </div>
  )
};

export {TableRow};