import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import App from '../layouts/App.jsx';
const user = {
  name: 'amir'
}
export default AppContainer = withTracker(({location, match, history}) => {
  return {
    user,
  };
})(App);