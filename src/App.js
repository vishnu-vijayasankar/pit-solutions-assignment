/**
* @Developed by @ArihantBhugari
*/


import React, { Component } from 'react';

// import router & history
import { Router, Route, Switch } from 'react-router-dom';
import { history} from './helpers';
import PublicRoutes from './publicRoutes';
import { connect } from 'react-redux';
import DefaultHeader from './containers/DefaultLayout/DefaultHeader'; 
import { alertActions } from './actions';

class App extends Component {
  
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
  }


  render() {
    const routePublicComponents = PublicRoutes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    const { loader } = this.props;
    return (
      <Router history={history}>
        {/* <ScrollToTop> */}
        <div className="App">
          {loader}
          <DefaultHeader { ...this.props } />
            <Switch>
              {routePublicComponents}
            </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    store:""
    // loader: state.loader.loading
  }
}

export default connect(mapStateToProps)(App);