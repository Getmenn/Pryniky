import { useEffect, useState } from 'react'
import { prynikyApi } from '../../api/prynikyApi'
import { ITableData } from '../../types/dats'
import { Table } from './components/table/Table'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './body.scss'
import { Preloader } from '../preloader/Preloader'
import { AdditionData } from './components/additionData/AdditionData'

interface IBody{
    loginVisable: boolean;
}

const Body: React.FC<IBody> = ({loginVisable}) => {

    const [data, setData] = useState<ITableData[] | null>(null)
    const [visableAddition, setVisableAddition] = useState<boolean>(false)
    const [loaderStatus, setLoaderStatus] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.getItem('token') && !loginVisable && !data) {
            getData()
        }

        if (loginVisable) {
            setData(null)
        }
    }, [loginVisable])

    useEffect(() => {
        if (!visableAddition) {
            getData()
        }
    }, [visableAddition])

    useEffect(() => { //установка статуса прелоадера
        if (!loginVisable && !data) {
            setLoaderStatus(true)
        }
        else {
            setLoaderStatus(false)
        }
    },[loginVisable, data])

    const getData = async () => {
        setLoaderStatus(true)
        setData(null)
        const response = await prynikyApi.getData();   
        setData(response.data)  
        setLoaderStatus(false)
    }

    const handleAddRow = async() => {
        setVisableAddition(true) 
    }

    
    

    return (
        <div className="body">
            {loaderStatus ? <Preloader /> : null}
            {data ? <Table data={data} />: null}
            {data ?
                <AddCircleIcon
                    fontSize='large'
                    color='info'
                    sx={{ marginTop: '20px', cursor: 'pointer' }}
                    onClick={handleAddRow}
                />
                : null
            }
            {visableAddition ? <AdditionData setVisableAddition={setVisableAddition} /> : null}
        </div>
    )
}

export {Body}