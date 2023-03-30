import React, { useEffect, useState } from 'react';
import './header.scss'
import { Authorization } from './Authorization';
import { Button } from '@mui/material';

interface IHeader{
  setLoginVisable:(loginVisable: boolean) => void;
  loginVisable: boolean
}

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