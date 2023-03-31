import { ITableProps } from '../../../../types/dats'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import './table.scss'

const Table: React.FC<ITableProps> = ({ data }) => {
    
    return (
        <div className="table">
            <TableHeader />
            {data.map(element => <TableRow key={element.id} element={element} />)}
        </div>
    )
}

export {Table}