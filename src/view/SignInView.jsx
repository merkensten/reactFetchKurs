import React, { useState, useContext } from 'react';
import { UserContext } from '../shared/global/provider/UserProvider'

export const SignInView = () => {
  const [username, setUsername] = useState();
  const [passoword, setPassword] = useState();
  const [authUser, setAuthUser] = useContext(UserContext);

  const login = () => {
    setAuthUser(username);
  }

  return (
    <div>
      <div className="username">
          <p>Användarnamn: </p>
          <input onChange={(event) => setUsername(event.target.value)}  type="text" placeholder="Skriv in ett användarnamn" />
      </div>
      <div className="password">
          <p>Lösenord: </p>
          <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Skriv in ditt lösenord..."/>
      </div>
      <button onClick={() => login()}>Logga in</button>
    </div>
  );
};
