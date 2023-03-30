import { main } from "./Api";
import { AxiosResponse } from 'axios';
import { DateType, IPrynikyApi, TokenType } from "../types/dats";

export const prynikyApi:IPrynikyApi = { //добавить обработку ошибок
    getToken: async (username, password) => { 
        const response: AxiosResponse<TokenType> = await main.post(
            '/ru/data/v3/testmethods/docs/login',
            { username: `${username}`, password: `${password}` }
        );  
        
        if (response.data.data) {
            localStorage.setItem('token', response.data.data.token)
        }

        console.log(response.data);
        
        return response.data;    
    },
    getData: async () => { 
        const response: AxiosResponse<DateType> = await main.get(
            '/ru/data/v3/testmethods/docs/userdocs/get',
            {headers: {'x-auth': `${localStorage.getItem('token')}`}  }
        );  
        
        return response.data;    
    },
    addRow: async (newRow) => { 
        const response = await main.post(
            '/ru/data/v3/testmethods/docs/userdocs/create',
            newRow,
            {headers: {'x-auth': `${localStorage.getItem('token')}`}  }
        );  

        console.log(response.data, '111');

        return response.data;    
    },
    deleteRow: async (id) => { 
        const response = await main.post(
            `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, {},
            {headers: {'x-auth': `${localStorage.getItem('token')}`}  }
        );  

        console.log(response.data, '111');

        return response.data;    
    },

}