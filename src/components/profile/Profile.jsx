import React, {useContext} from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import './Profile.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const Profile = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('username')
        setAuthUser(false)
        history.push(RoutingPath.homeView)
    }

    return (
        <div className="profile-wrapper">
            <li className="auth-user">{authUser}</li>
            <div className="dropdown-menu">
                <a onClick={() => history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={() => history.push(RoutingPath.profileView)}>Profile</a>
                <a onClick={() => logout()}>Log Out</a>
            </div>
        </div>
    )
}
