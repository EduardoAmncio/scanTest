import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthenticationRoutes } from "features/authentication/constants/routes";
import { useToken } from "hooks/useToken";

export const ProtectedRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}) => {
  const token = useToken();

  const render = (Component: any) => (routeProps: RouteProps) => {
    if (!Component) return null;
    if (token) return <Component {...routeProps} />;

    return <Redirect to={AuthenticationRoutes.signIn} />;
  };

  return <Route {...rest} render={render(component)} />;
};
