import { useState } from 'react';
import { ITableData } from '../../../../types/dats'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import './table.scss'
import { prynikyApi } from '../../../../api/prynikyApi';
import { AdditionData } from '../additionData/AdditionData';

interface ITableProps{
    data: ITableData[];
}

const Table: React.FC<ITableProps> = ({ data }) => {
    
    return (
        <div className="table">
            <TableHeader />
            {data.map(element => <TableRow key={element.id} element={element} />)}
        </div>
    )
}

export {Table}