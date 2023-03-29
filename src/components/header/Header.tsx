import React, { useEffect, useState } from 'react';
import './header.scss'
import { Authorization } from './Authorization';
import { Button } from '@mui/material';


const Header: React.FC = () => {

    const [loginVisable, setLoginVisable] = useState<boolean>(true)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoginVisable(false)
        }
        else {
            setLoginVisable(true)
        }
    }, [])

  return (
      <>
        <div className="header">
            <Button variant="text">Выход</Button>
        </div> 
          {loginVisable ? <Authorization setLoginVisable={setLoginVisable} /> : null}
    </>
  );
}

export {Header}