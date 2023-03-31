import { ChangeEvent, useState } from "react";
import { prynikyApi } from "../../../../api/prynikyApi";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";
import { ITableCell, ITableData } from "../../../../types/dats";

const TableCell: React.FC<ITableCell> = ({item,id, name}) => {
  
  const [cell, setCell] = useState<string>(item);
  const { data } = useTypedSelector(state => state.main)

  const reloadRow = (event: ChangeEvent<HTMLInputElement>) => {
    let newRow: ITableData | undefined
    setCell(event.target.value)
    data.forEach(el => el.id === id ? newRow = el : null)
    if (newRow && id) {
      newRow[name as keyof ITableData] = event.target.value
      prynikyApi.reloadRow(id, newRow)
    } 
  }
  
  return (
    <div className="tableCell">
      {id
        ? <input
            value={cell}
            onChange={(e) => reloadRow(e)}
            type="text"
        />
        : null}
    </div>
  )
}

export {TableCell};