import React from "react";
import './NotFound.css';
import { clearFetchSongsErrs } from '../actions/songs'; 
import { useDispatch } from 'react-redux';

const NotFound = () => {
    const dispatch = useDispatch();
    dispatch(clearFetchSongsErrs());

    return (
        <div className="not-found">
            <h3>Sorry, your search format cannot be accepted</h3>
        </div>
    )
}

export default NotFound;