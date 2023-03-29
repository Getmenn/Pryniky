import React, {useRef, useState} from 'react'
import './header.scss'
import { Button, TextField } from "@mui/material";
import { prynikyApi } from '../../api/prynikyApi';

interface IAuthorization{
  setLoginVisable: (loginVisable:boolean) => void;
}

const Authorization: React.FC<IAuthorization> = ({setLoginVisable}) => {

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(true);


  const handleAuthorization = async () => {
    const response = await prynikyApi.getToken(login, password);
    if (!response.data) {
      setError(true);
    }
    setLoginVisable(false)
  }

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    if (error) {
      setError(false)
    }
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
      
  return (
    <>
      <div className="authorization">
        {error ? <span>Не верный логин или пароль</span>: null}
        <TextField
          label="Логин"
          variant="filled"
          value={login}
          onChange={handleLoginChange}
          error={error}
        />
        <TextField
          label="Пароль"
          variant="filled"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={error}
        />
        <Button variant="contained" onClick={handleAuthorization}>Вход</Button>
      </div> 
      <div className="overlay" />
    </>
  );
}
  
export {Authorization}