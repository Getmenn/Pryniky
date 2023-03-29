import { main } from "./Api";
import { AxiosResponse } from 'axios';

interface IPrynikyApi {
    getToken: (username: string, password: string) => Promise<IUser>;
}

interface ITokenData {
    token: string;
}
  
interface IUser{
    data: ITokenData;
}

export const prynikyApi:IPrynikyApi = {
    getToken: async (username, password) => { 
        const response: AxiosResponse<IUser> = await main.post(
            '/ru/data/v3/testmethods/docs/login',
            { username: `${username}`, password: `${password}` }
        );  

        if (response.data.data) {
            localStorage.setItem('token', response.data.data.token)
        }
             
        return response.data;
    }
}