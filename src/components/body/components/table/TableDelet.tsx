import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { prynikyApi } from '../../../../api/prynikyApi';
import { useDispatch } from 'react-redux';
import { deleteRow } from '../../../../redux/mainReducer';

interface ITableDelet{
    id: string | undefined;
}

const TableDelet: React.FC<ITableDelet> = ({ id }) => {
    
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (id) {
            prynikyApi.deleteRow(id)       
            dispatch(deleteRow(id))
        }
    }

    return (
        <div className="tableCell delete">
            <HighlightOffIcon
                color='error'
                sx={{ marginLeft: '5px', cursor: 'pointer' }}
                onClick={handleDelete}
            />
        </div>
    )
};

export {TableDelet};