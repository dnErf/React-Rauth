import React from 'react';
import { Route , Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { authConnect } from '../redux'

const Private = ({component : Component , auth , ...rest}) => (
  <Route 
    {...rest}
    render={props => 
      auth.isAuthenticated === true ?
      (<Component {...props}/>) :
      (<Redirect to="/" />)
    }
  />
)

Private.propTypes = {
  auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth : state.auth ,
  error : state.error
});

export default authConnect(mapStateToProps)(Private)