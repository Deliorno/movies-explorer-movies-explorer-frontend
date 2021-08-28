import React from "react";
import { Route, Redirect } from "react-router-dom";
// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRouteMovies = ({ component: Component, ...props }) => {
  console.log("ProtectedRouteMovies: " + props.loggedIn);
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRouteMovies;