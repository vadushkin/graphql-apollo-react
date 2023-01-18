import './App.css';
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "./query/user";
import {CREATE_USER} from "./mutations/user";

function App() {
    const {data, loading, error, refetch} = useQuery(GET_ALL_USERS);
    const [newUser] = useMutation(CREATE_USER);
    const [users, setUsers] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers)
        }
    }, [data])

    if (loading) {
        return <h1>Loading...</h1>
    }

    const addUser = (e) => {
        e.preventDefault();

        newUser({
            variables: {
                input: {
                    firstname, lastname
                }
            }
        }).then(({data}) => {
            console.log(data);
            setFirstname('');
            setLastname('');
        })
    }

    const getAll = (e) => {
        e.preventDefault();

        refetch().then(r => console.log(r)); // not good practice
    }

    return (
        <div>
            <form>
                <input value={firstname} onChange={e => setFirstname(e.target.value)} type="text" placeholder="Firstname"/>
                <input value={lastname} onChange={e => setLastname(e.target.value)} type="text" placeholder="Lastname"/>

                <div className="buttons">
                    <button onClick={e => addUser(e)}>Create</button>
                    <button onClick={e => getAll(e)}>Get</button>
                </div>
            </form>
            <div>
                {users.map((user) =>
                    <div className="user" key={user.id}>
                        {user.firstname} {user.lastname}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
