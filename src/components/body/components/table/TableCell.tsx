import { useState } from "react";

interface ITableCell{
    item: string
}

const TableCell: React.FC<ITableCell> = ({ item }) => {
  
    const [state, setState] = useState<string>(item);

  return (
    <div className="tableCell">
      <input
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text" />
    </div>
  )
}

export {TableCell};