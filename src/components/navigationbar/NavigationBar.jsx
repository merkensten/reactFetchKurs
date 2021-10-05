import React, { useContext } from 'react';
import './NavigationBar.css';
import Logo from '../../shared/images/logo.svg';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../shared/global/provider/UserProvider';
import { Profile } from '../profile/Profile';
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);

  const displayUserIfAuthenticated = () => {
    return authUser ? (
      <Profile />
    ) : (
      <li onClick={() => history.push(RoutingPath.signInView)}>Sign In</li>
    );
  };

  return (
    <div className="navigation-bar-container">
      <div className="navigation-bar">
        <div>
          <img
            onClick={() => history.push(RoutingPath.homeView)}
            className="logo"
            src={Logo}
            alt="Logo"
          ></img>
        </div>
        <nav>
          <ul>
            <li onClick={() => history.push(RoutingPath.recipeView)}>Recipe</li>
            {displayUserIfAuthenticated()}
          </ul>
        </nav>
      </div>
    </div>
  );
};
