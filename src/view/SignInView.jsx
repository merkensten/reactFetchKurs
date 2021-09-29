import React, { useState } from 'react';

export const SignInView = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [passoword, setPassword] = useState();

  return (
    <div>
      <div className="username">
          <p>Användarnamn: </p>
          <input onChange={(event) => setLoggedInUser(event.target.value)}  type="text" placeholder="Skriv in ett användarnamn" />
      </div>
      <div className="password">
          <p>Lösenord: </p>
          <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Skriv in ditt lösenord..."/>
      </div>
      <button>Logga in</button>
    </div>
  );
};
