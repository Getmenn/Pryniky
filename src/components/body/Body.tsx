import { useEffect, useState } from 'react';
import { prynikyApi } from '../../api/prynikyApi';
import { IBody } from '../../types/dats';
import { Table } from './components/table/Table';
import { useDispatch } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './body.scss';
import { Preloader } from '../preloader/Preloader';
import { AdditionData } from './components/additionData/AdditionData';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { cleanData, setData } from '../../redux/mainReducer';

const Body: React.FC<IBody> = ({loginVisable}) => {

    const { data } = useTypedSelector(state => state.main)
    const [visableAddition, setVisableAddition] = useState<boolean>(false)
    const [loaderStatus, setLoaderStatus] = useState<boolean>(false)
    const dispatch = useDispatch();

    const getData = async () => { //получение данных с сервера и сохранение их в сторедж
        setLoaderStatus(true)
        const response = await prynikyApi.getData();   
        dispatch(setData(response.data))  
        setLoaderStatus(false)
    }

    useEffect(() => { //обновить date после добавление элемента
        if (!visableAddition && data.length) {
            getData()
        }
    }, [visableAddition])

    useEffect(() => { //добавление date после авторизации
        if (localStorage.getItem('token') && !loginVisable && !data.length) {
            getData()
        }

        if (loginVisable) {
            dispatch(cleanData()) 
        } 
    }, [loginVisable, data.length])

    useEffect(() => { //установка статуса прелоадера
        if (!loginVisable && !data.length) {
            setLoaderStatus(true)
        }
        else {
            setLoaderStatus(false)
        }
    },[loginVisable, data])

    return (
        <div className="body">
            {loaderStatus ? <Preloader /> : null}
            {data.length ? <Table data={data} />: null}
            {data.length ?
                <AddCircleIcon
                    fontSize='large'
                    color='info'
                    sx={{ marginTop: '20px', cursor: 'pointer' }}
                    onClick={() => setVisableAddition(true)}
                />
                : null
            }
            {visableAddition ? <AdditionData setVisableAddition={setVisableAddition} /> : null}
        </div>
    )
}

export {Body}