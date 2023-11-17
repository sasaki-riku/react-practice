import { useContext } from 'react';

import { AdminFlagContext } from './Providers/AdminFlagProvider';

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
};

export const EditButton = () => {
    const { isAdmin } = useContext(AdminFlagContext);

    return (
        <button style={style} disabled={!isAdmin}>編集</button>
    );
};