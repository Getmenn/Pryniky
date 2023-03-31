import React, { useEffect } from 'react';
import './header.scss'
import { Authorization } from './Authorization';
import { Button } from '@mui/material';
import { IHeader } from '../../types/dats';

const Header: React.FC<IHeader> = ({setLoginVisable, loginVisable}) => {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoginVisable(false)
    }
    else {
      setLoginVisable(true)
    }
  }, [])

  const handleExit = () => {
    localStorage.removeItem('token')
    setLoginVisable(true);
  }

  return (
    <>
        <div className="header">
            <Button variant="text" onClick={handleExit}>Выход</Button>
        </div> 
          {loginVisable ? <Authorization setLoginVisable={setLoginVisable} /> : null}
    </>
  );
}

export {Header}