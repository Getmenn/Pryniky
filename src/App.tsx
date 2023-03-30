import { useState } from "react"
import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import './index.scss'

const App: React.FC = () => {

    const [loginVisable, setLoginVisable] = useState<boolean>(true)

    return (
        <>
            <Header setLoginVisable={setLoginVisable} loginVisable={loginVisable} />
            <Body loginVisable={loginVisable} />
        </>
    )
}

export {App}