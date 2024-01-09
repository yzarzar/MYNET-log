import { Button, Box, TextField, Link } from "@mui/material";
import React, {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
const SignUpForm = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <>
            <div className="w-full h-[640px] flex flex-row justify-center" data-aos='fade-left' data-aos-easing="ease-out-cubic"
                 data-aos-duration="500">
                <div className="w-[800px] h-[470px] flex flex-row justify-center mt-[35px]">
                    <div className="h-full w-[420px]">
                        <form>
                            <div className="flex flex-col w-full h-full">
                                <div>
                                    <span className="text-[13px] font-light">
                                      STEP <b>1</b> OF <b>3</b>
                                    </span>
                                    <h1 className="text-3xl font-semibold">
                                        <span>
                                           Welcome back! <br /> Joining Netflix is easy.
                                       </span>
                                    </h1>
                                    <div className="mt-2">
                                       <span className="text-[18px] text-gray-900 font-light">
                                           Enter your password and you'll be watching in no time.
                                       </span>
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <h5 className="text-[15px] text-gray-900 font-light">
                                            Email
                                        </h5>
                                        <h5 className="text-[15px] font-bold">john@gmail.com</h5>
                                    </div>
                                    <div className="w-full mt-4">
                                        <Box
                                            component="form"
                                            sx={{
                                                "& .MuiTextField-root": { m: 0, width: "100%" }, // Set width to "100%"
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="outlined-password-input"
                                                label="Enter your password"
                                                type="password"
                                                autoComplete="current-password"
                                                fullWidth
                                            />
                                        </Box>
                                        <div className="mt-5">
                                            <Link href="#" underline="hover">
                                                {"Forgot your password?"}
                                            </Link>
                                        </div>
                                        <div className="w-full mt-9">
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                    height: "4rem",
                                                    fontSize: "1.3rem",
                                                    backgroundColor: "red",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
