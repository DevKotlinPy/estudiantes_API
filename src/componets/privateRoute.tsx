import React from 'react';
import { Route, redirect} from 'react-router-dom';
import { getAuthToken } from '../state/auth';

interface PrivateRouteProps {
    component: React.FC;
    path: string;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const token = getAuthToken();
  
    return (
      <Route
            {...rest}
                render={(props) => token ? <Component {...props} /> : <redirect  to="/login" />
            }
        />
    );
  };
  
  export default PrivateRoute;