import React, { useContext } from 'react';
import './NavigationBar.css';
import Logo from '../../shared/images/logo.svg';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../shared/global/provider/UserProvider';

export const NavigationBar = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);

  return (
    <div className="navigation-bar-container">
      <div className="navigation-bar">
        <div>
          <img
            onClick={() => history.push('/')}
            className="logo"
            src={Logo}
            alt="Logo"
          ></img>
        </div>
        <nav>
          <ul>
            <li onClick={() => history.push('/sign-in')}>Sign In</li>
            <li onClick={() => history.push('/recipe')}>Recipe</li>
            <li>{authUser}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
