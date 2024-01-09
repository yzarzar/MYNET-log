import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Checkbox from "@mui/joy/Checkbox";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useCreateUserMutation } from "/src/api/userApi";
import Cookies from "js-cookie";

export const RegForm = () => {
  const nav = useNavigate();
  const emailA = Cookies.get("emailCook") ? JSON.parse(Cookies.get("emailCook")) : '';
  const [createUser, { isLoading }] = useCreateUserMutation("createUser");
  const [formData, setFormData] = useState({
    email: `${emailA}`,
    password: "",
  });
  
  const handleCreateNewUser = async (event) => {
    event.preventDefault();
    try {
      await createUser({ email: formData.email, password: formData.password });
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error creating user : ", error);
    } finally {
      Cookies.remove('emailCook');
      nav('/signUp');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <div
        className="justify-center w-full h-[618px] flex flex-row"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        <div className="w-full h-[530px] text-center">
          <div className="mt-[35px] flex flex-row justify-center">
            <div className="w-[437px] h-[450px] flex flex-col">
              <div className="flex flex-col mt-[13px]">
                <span className="text-[13px] font-light text-left">
                  STEP <b>1</b> OF <b>3</b>
                </span>
                <h1 className="text-left text-[34px] font-medium text-gray-950 leading-[40px] acc mb-[20px] mt-[5px]">
                  Create a password to start your membership
                </h1>
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full">
                  <p className="text-gray-700 text-[18px] text-left leading-[30px]">
                    Just a few more steps and you're done!
                  </p>
                </div>
                <p className="text-gray-700 text-[18px] text-left w-[300px] leading-[30px] mb-[20px]">
                  We hate paperwork, too.
                </p>
                <Box
                  component="form"
                  onSubmit={handleCreateNewUser}
                  sx={{
                    "& .MuiTextField-root": { m: 0, width: "100%", marginTop:1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required={isLoading}
                    fullWidth
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Add a password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required={isLoading}
                    autoComplete="current-password"
                    fullWidth
                  />
                  <Checkbox
                    className="mr-[114px] mt-[8px]"
                    color="success"
                    size="sm"
                    label="Please do not email me Netflix special offers."
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                    fullWidth
                    sx={{
                      height: "4rem",
                      fontSize: "1.2rem",
                      backgroundColor: "red",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    {isLoading ? 'Loading...' : 'Next'}
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
