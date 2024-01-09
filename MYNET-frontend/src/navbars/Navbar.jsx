import React from "react";
import netImage from "../images/netflix.png";
import { Link, ListItem, ListItemButton, Popover } from "@mui/material";
import { navbarLogic } from "./navbarLogic";
import { MdLogout } from "react-icons/md";
import Button from "@mui/joy/Button";
import { ListDivider } from "@mui/joy";
import { FaUserGear } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import Avatar from "@mui/joy/Avatar";
import netImg from "../images/net.png";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { isSignUpPage } = navbarLogic();
  const { isStartHome } = navbarLogic();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popoverStyle = {
    top: "55px",
    left: "27px",
  };

  return (
    <div
      className={`flex flex-col w-full h-full ${
        isStartHome ? "relative bg-gray-400" : ""
      }`}
    >
      <div
        className={`flex flex-row justify-between h-[85px] ${
          isStartHome ? "" : "border"
        }`}
      >
        {!isStartHome && (
          <img
            src={netImage}
            alt="Network"
            className="w-[160px] h-[50px] mt-[20px] ml-[34px]"
          />
        )}
        {isStartHome && (
          <img
            src={netImg}
            alt="Network"
            className="w-[200px] h-[87px] ml-[30px]"
          />
        )}
        {isStartHome && (
          <div className="mt-[23px] w-full flex flex-row justify-end">
            <div className="mr-[20px]">
              <Box sx={{ flexGrow: 1 }}>
                <Search className="border">
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "white" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{
                      "aria-label": "search",
                      style: { color: "white", placeholder: "white" },
                    }}
                  />
                </Search>
              </Box>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center text-center mr-[50px]">
          <Link
            href={isSignUpPage ? "/SignOut" : "/SignIn"}
            underline="hover"
            sx={{
              color: "#1A4755",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {!isStartHome && <div>{isSignUpPage ? "Sign Out" : "Sign In"}</div>}
          </Link>
          {isStartHome && (
            <div className="flex flex-row">
              <h1 className="mt-1 font-bold text-white">Hi,</h1>
              <div className="mr-[10px]">
                <h1 className="mt-1 text-white">&nbsp;yar</h1>
              </div>
              <Avatar
                onClick={handleClick}
                size="sm"
                sx={{
                  backgroundColor: "#FF7000",
                  color: "white",
                  ":hover": {
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "#3F7CD9",
                  },
                }}
              >
                Y
              </Avatar>
              <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{
                  horizontal: "right",
                }}
                style={popoverStyle}
                PaperProps={{
                  style: {
                    borderRadius: "10px",
                  },
                }}
              >
                <div
                  onClick={handleClose}
                  className="flex flex-col bg-gray-950/75 w-[315px] h-[245px]"
                >
                  <div className="h-[168px] flex flex-row justify-center">
                    <div className="flex flex-col w-[280px]">
                      <ListItemButton
                        sx={{
                          "&:hover": {
                            "& h1": {
                              color: "#D95320",
                            },
                          },
                        }}
                      >
                        <h1 className="font-bold text-white text-[13.5px] flex flex-row">
                          <FaUserGear size={20} className="mr-[10px]" />
                          Account Settings
                        </h1>
                      </ListItemButton>
                      <ListDivider />
                      <ListItemButton
                        sx={{
                          "&:hover": {
                            "& h1": {
                              color: "#D95320",
                            },
                          },
                        }}
                      >
                        <h1 className="font-bold text-white text-[13.5px] flex flex-row">
                          <FaQuestionCircle size={20} className="mr-[10px]" />
                          Help Center
                        </h1>
                      </ListItemButton>
                      <ListDivider />
                      <ListItemButton
                        sx={{
                          "&:hover": {
                            "& h1": {
                              color: "#D95320",
                            },
                          },
                        }}
                      >
                        <h1 className="font-bold text-white text-[13.5px] flex flex-row">
                          <PiDevicesFill size={20} className="mr-[10px]" />
                          Activate Your Device
                        </h1>
                      </ListItemButton>
                    </div>
                  </div>
                  <div className="h-[78px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 flex flex-row justify-center">
                    <div className="flex flex-col justify-center">
                      <Button
                        size="md"
                        color="neutral"
                        className="h-[50px] w-[278px]"
                      >
                        <h1 className="flex flex-row text-[15px]">
                          Sign Out
                          <MdLogout size={15} className="ml-[5px] mt-[3.4px]" />
                        </h1>
                      </Button>
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
