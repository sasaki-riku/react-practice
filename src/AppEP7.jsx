import { useContext, useState } from "react";
import { AdminFlagContext } from './components/Providers/AdminFlagProvider';
import { Card } from "./components/Card";

export const AppEP7 = () => {
    const { isAdmin, setIsAdmin} = useContext(AdminFlagContext);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>管理者</span> : <span>管理者以外</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin}/>
        </div>
    );
}