import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../actions/users';
import SearchBox from '../components/SearchBox'
import './Navbar.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';


const Navbar = () => {
    const dispatch = useDispatch();

    const token = useSelector(st => st.users.token);
    const user = useSelector(st => st.users.user);

    const signOut = () => {
      dispatch(logout());
    }

    const homeOrSuggestion = (user) => {
      return (
        <NavLink className="nav-link" to={user && user.username ? `/suggestion` : `/`}>
          <span>I-Music</span>
        </NavLink>
      )
    }

    const loggedInNav = () => {
      return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to={`/user/${user.username}`}>
              Hello {`${user.username}'s`}!
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout" onClick={signOut}>
              Log Out
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/help">
              Help
            </NavLink>
          </li>
        </ul>
      )
    } 

    const loggedOutNav = () => {
      return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/help">
              Help
            </NavLink>
          </li>
        </ul>
      )
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <nav className="navbar navbar-expand-lg navbar-default fixed-top"> */}
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {homeOrSuggestion(user)}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {token ? loggedInNav() : loggedOutNav()} 
            <SearchBox/>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;