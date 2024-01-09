import React, {useEffect} from "react";
import trueIcon from '../../images/trueIcon.png'
import trueIconWithoutCircle from '../../images/trueIconWithoutCir.png';
import {Button} from "@mui/material";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useNavigate} from "react-router-dom";

export const SignUp = () => {
    const nav = useNavigate();
    const nextBtnHandler = () => {
        nav('/signUp/planForm');
    }
    useEffect(() => {
        AOS.init()
    },[])
    return (
        <>
            <div className='justify-center w-full h-[618px] flex flex-row' data-aos='fade-left' data-aos-easing="ease-out-cubic"
                 data-aos-duration="500">
                <div className='w-[800px] h-[509px] flex flex-row justify-center mt-[35px]'>
                    <div className="h-full w-[340px] flex flex-col">
                        <div className='flex flex-row justify-center mt-[83px]'>
                            <img src={trueIcon} className='w-[50px]'/>
                        </div>
                        <div className='text-center mt-[20px] leading-[30px]'>
                            <span className="text-[13px] font-light">
                                      STEP <b>2</b> OF <b>3</b>
                            </span>
                            <h1 className='text-[33px] font-medium'>Choose your plan.</h1>
                        </div>
                        <div className='w-full flex flex-row justify-center mt-[38px]'>
                            <ul className='flex flex-col w-[300px]'>
                                <li className='flex flex-row mb-[8px]'>
                                    <img src={trueIconWithoutCircle} className='w-[28px] h-[28px] top-auto'/>
                                    <p className='text-gray-700 text-[18px] text-left leading-[30px] ml-[10px]'>No commitments, cancel anytime.</p>
                                </li>
                                <li className='flex flex-row mb-[8px]'>
                                    <img src={trueIconWithoutCircle} className='w-[28px] h-[28px] top-auto'/>
                                    <p className='text-gray-700 text-[18px] text-left leading-[30px] ml-[10px]'>Everything on Netflix for one low price.</p>
                                </li>
                                <li className='flex flex-row mb-[8px]'>
                                    <img src={trueIconWithoutCircle} className='w-[28px] h-[28px] top-auto'/>
                                    <p className='text-gray-700 text-[18px] text-left leading-[30px] ml-[10px]'>No ads and no extra fees. Ever.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-8">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    height: "4rem",
                                    fontSize: "1.3rem",
                                    backgroundColor: "red",
                                    fontWeight: "bold",
                                }}
                                onClick={nextBtnHandler}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
