import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//containers
import AppContainer from '../../ui/containers/AppContainer.js';
import inventoryContainer from '../../ui/containers/InventoryContainer.js';
//pages
import Home from '../../ui/pages/Home';

export const renderRoutes = () => (
  <Router>
    <div> 
      <Switch>   
        <Route exact path='/' render={props => <AppRoute Component={Home} Layout={AppContainer} props={props} />} />
        <Route exact path='/inventory' render={props => <AppRoute Component={inventoryContainer} Layout={AppContainer} props={props} />} />
      </Switch>
    </div>
  </Router>
);

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  } else if (!Component){
      return <Layout {...props} />;
  } else {
    return <Component {...props} />;
  }
};
