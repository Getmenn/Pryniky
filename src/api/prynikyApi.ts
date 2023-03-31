import { main } from "./Api";
import { AxiosResponse } from 'axios';
import { DateType, IPrynikyApi, TokenType } from "../types/dats";

export const prynikyApi:IPrynikyApi = { //добавить обработку ошибок
    getToken: async (username, password) => { 
        try {
            const response: AxiosResponse<TokenType> = await main.post(
                '/ru/data/v3/testmethods/docs/login',
                { username: `${username}`, password: `${password}` }
            );  
            
            if (response.data.data) {
                localStorage.setItem('token', response.data.data.token)
            }
            
            return response.data;  
        }
        catch (error) {
            alert('Error getToken ');
            console.error(error);
            throw new Error('Error getToken API');
        }
    },
    getData: async () => {    
        try {
            const response: AxiosResponse<DateType> = await main.get(
                '/ru/data/v3/testmethods/docs/userdocs/get',
                {headers: {'x-auth': `${localStorage.getItem('token')}`}  }
            );

            return response.data;
        }
        catch (error) {
            console.error(error);
            alert('Error getData')
            throw new Error('Error getData API');
        }
    },
    addRow: async (newRow) => {  
        try {
            await main.post(
                '/ru/data/v3/testmethods/docs/userdocs/create',
                newRow ,
                { headers: { 'x-auth': `${localStorage.getItem('token')}` } },
                
            );   
        }
        catch (error) {
            console.error(error);
            alert('Error addRow ');
            throw new Error('Error addRow API');
        }
    },
    deleteRow: async (id) => { 
        try {
            await main.post(
                `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
                {},
                {headers: {'x-auth': `${localStorage.getItem('token')}`}  }
            ); 
        }
        catch (error) {
            console.error(error);
            alert('Error deleteRow ');
            throw new Error('Error deleteRow API');
        }
    },
    reloadRow: async (id, newRow) => { 
        try {
            await main.post(
                `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
                newRow,
                {headers: {'x-auth': `${localStorage.getItem('token')}`}  }
            );  
        }
        catch (error) {
            console.error(error);
            alert('Error reloadRow ');
            throw new Error('Error reloadRow API');
        }   
    },

}