import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import Root from '../imports/client/containers/Root';
import configureStore from '../imports/client/store/store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

Meteor.startup(() => {
  render(
    <Root store={store} history={history} />,
    document.getElementById('root')
  );
});
