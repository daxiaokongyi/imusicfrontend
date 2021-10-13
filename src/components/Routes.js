import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import UserDetail from './UserDetail';
import Signup from './Signup';
import Signin from './Signin';
import SongDetail from './SongDetail';
import Suggestion from './Suggestion';
import SearchResult from './SearchResult';
import Songs from './Songs';
import Albums from './Albums';
import Playlists from './Playlists';
import Videos from './Videos';
import NotFound from './NotFound';
import Help from './Help';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/help">
                    <Help/>
                </Route>
                <Route exact path="/suggestion">
                    <Suggestion/>
                </Route>
                <Route exact path="/notfound">
                    <NotFound/>
                </Route>
                <Route exact path="/signin">
                    <Signin/>
                </Route>
                <Route exact path="/signup">
                    <Signup/>
                </Route> 
                <Route path="/song/:songid">
                    <SongDetail/>
                </Route>
                <Route path="/songs/:name">
                    <Songs/>
                </Route>
                <Route path="/albums/:name">
                    <Albums/>
                </Route>
                <Route path="/playlists/:name">
                    <Playlists/>
                </Route>
                <Route path="/videos/:name">
                    <Videos/>
                </Route>
                <Route path="/search">
                    <SearchResult/>
                </Route>
                <Route path="/user/:username">
                    <UserDetail/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}

export default Routes;