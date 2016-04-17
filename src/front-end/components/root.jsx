import React from 'react';
import { Router, Route } from 'react-router';

import Followed from './views/followed';
import Channels from './views/channels';
import Games from './views/games';
import Nav from './nav';

import { refreshChannels, refreshGames, refreshFollowed } from '../util/refresh';

const displayName = 'Router';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Nav}>
          <Route path="/followed" component={Followed} onEnter={refreshFollowed}/>
          <Route path="/games" component={Games} onEnter={refreshGames}/>
          <Route path="/channels" component={Channels} onEnter={refreshChannels}/>
        </Route>
      </Router>
    );
  }
}

Routes.displayName = displayName;

export default Routes;
