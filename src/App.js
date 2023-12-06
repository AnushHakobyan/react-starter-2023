import { useEffect, useState } from 'react';
import Page from './Page';
import { getUser } from './service/user';
import './App.css';
import UserContext from "./UserContext/UserContext";

function App() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUser();
            setUser(res);
        }

        fetchUser();
    },[]);

    return (
        <UserContext.Provider value={user}>
            <Page />
        </UserContext.Provider>
    );
}

export default App;
