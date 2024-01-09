import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

export const HomeNavRouteGate = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signIn") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location.pathname]);

  return <>{showNav && children}</>;
};
