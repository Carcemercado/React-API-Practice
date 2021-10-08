import React from "react";
import ReactDOM from "react-dom";

const baseUrl = 'https://api.github.com/users/';

function App(){
    const [username, setUsername] = React.useState('carcemercado');

    const [user, setUser] = React.useState(null);

    async function getUser(){
        const response = await fetch(`${baseUrl}${username}`)
        const data = await response.json();
        setUser(data);

    }
    
    React.useEffect( () =>{
        getUser();
        // fetch(endpoint)
        //     .then(response => response.json())
        //     .then(data => setUser(data));
    }, []);

    return (
    <div>
        <input
         type='text'
         placeholder='Input username'
         onChange={event => setUsername(event.target.value)}   />
        <button onClick={getUser} >Search</button>
        <button>Clear</button>

        {user ? (
            <div>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <img alt='avatar' src={user.avatar_url} style={{height: 50}} />
            </div>
        ): (
        <p>Loading...</p>
        )}
    </div>
    );

}


// This displays the app
const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
