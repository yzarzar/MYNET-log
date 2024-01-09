import React, { useState } from 'react';
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import netImage from "../images/net.png";
import { navbarLogic } from './navbarLogic';

const HomeNav = () => {
  const [animate, setAnimate] = useState(false);
  const nav = useNavigate();
  const { showItem } = navbarLogic();

  const loginHandler = () => {
    nav(`/signIn`);
    setAnimate(true);
  };

  return (
      <>
        <div className={`w-[1250px] h-full flex flex-row justify-between ${animate ? "work" : "no"}`}>
          <div className={`shadow-inner ml-${showItem ? '[134px]' : '[0px]'}`}>
            <img
                src={netImage}
                alt="Network"
                className="w-[250px] h-[120px]"
            />
          </div>
          {!showItem && (
              <div onClick={loginHandler} className="mt-10">
                <Button variant="contained">
                  <h1 className="font-extrabold text-1xl">Sign In</h1>
                </Button>
              </div>
          )}
        </div>
      </>
  );
};

export default HomeNav;
