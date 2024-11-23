import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'

/* const PrivateRoute = (props) => {
  return <Route exact= {props.exact} path={props.path} component={props.component} />;
} */

  /* const PrivateRoute = (props) => {
    return <Route {...props} />;
  }
 */

  let auth;
  
  auth = true;
  auth = null;


  const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route {...rest} >{auth? <Component/> : <Redirect to='/login'/>}</Route>;
  }

export default PrivateRoute
