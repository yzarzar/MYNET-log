import {useEffect, useState} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import trueIconWithoutCircle from "../../images/trueIconWithoutCir.png";
import {IoPhonePortraitOutline} from "react-icons/io5";
import {BsTabletLandscape} from "react-icons/bs";
import {GrPersonalComputer} from "react-icons/gr";
import {RiComputerLine} from "react-icons/ri";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import triangle from "../../images/triangle.png"

export const PlanForm = () => {
    const nav = useNavigate();
    const nextBtnHandler = () => {
        nav('/signIn');
    }
    useEffect(() => {
        AOS.init();
    }, [])
    const [activeSection, setActiveSection] = useState(null);
    const handleDivClick = (section) => {
        setActiveSection(section === activeSection ? null : section);
    };
    const isSectionActive = (section) => section === activeSection;
    return (
        <>
            <div className='flex flex-row justify-center' data-aos='fade-left' data-aos-easing="ease-out-cubic"
                 data-aos-duration="500">
                <div className='w-[916px]'>
                    <div className='flex flex-col mt-[15px]'>
                        <div>
                            <div className='leading-[37px]'>
                            <span className="text-[13px] font-light">
                                      STEP <b>2</b> OF <b>3</b>
                            </span>
                                <h1 className='text-[33px] font-medium'>Choose the plan that’s right for you</h1>
                            </div>
                            <div className='w-full mt-[20px]'>
                                <ul className='flex flex-col'>
                                    <li className='flex flex-row mb-[8px]'>
                                        <img src={trueIconWithoutCircle} className='w-[28px] h-[28px] top-auto'/>
                                        <p className='text-gray-700 text-[18px] text-left leading-[30px] ml-[10px]'>Watch
                                            all you want. Ad-free.</p>
                                    </li>
                                    <li className='flex flex-row mb-[8px]'>
                                        <img src={trueIconWithoutCircle} className='w-[28px] h-[28px] top-auto'/>
                                        <p className='text-gray-700 text-[18px] text-left leading-[30px] ml-[10px]'>Recommendations
                                            just for you.</p>
                                    </li>
                                    <li className='flex flex-row mb-[8px]'>
                                        <img src={trueIconWithoutCircle} className='w-[28px] h-[28px] top-auto'/>
                                        <p className='text-gray-700 text-[18px] text-left leading-[30px] ml-[10px]'>Change
                                            or cancel your plan anytime.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-row h-[111px] w-full justify-end mt-[30px]'>
                            <div className='flex flex-col'>
                                <div className={`${isSectionActive('mobile') ? 'bg-red-600' : 'bg-red-300'} w-[120px] h-[100px] mr-[45px]`}
                                     onClick={() => handleDivClick('mobile')}>
                                    <div className='w-[120px] h-[100px] mr-[45px] flex justify-center'>
                                        <div className='flex flex-col justify-center'>
                                            <h6 className='font-bold text-white'>Mobile</h6>
                                        </div>
                                    </div>
                                </div>
                                {isSectionActive('mobile') && (
                                    <div className='flex flex-row justify-center'>
                                        <img src={triangle} className='w-[20px] mr-[44px]' alt="Triangle"/>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col'>
                                <div className={`${isSectionActive('basic') ? 'bg-red-600' : 'bg-red-300'} w-[120px] h-[100px] mr-[45px]`}
                                     onClick={() => handleDivClick('basic')}>
                                    <div className='w-[120px] h-[100px] mr-[45px] flex justify-center'>
                                        <div className='flex flex-col justify-center'>
                                            <h6 className='font-bold text-white'>Basic</h6>
                                        </div>
                                    </div>
                                </div>
                                {isSectionActive('basic') && (
                                    <div className='flex flex-row justify-center'>
                                        <img src={triangle} className='w-[20px] mr-[44px]' alt="Triangle"/>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col'>
                                <div className={`${isSectionActive('standard') ? 'bg-red-600' : 'bg-red-300'} w-[120px] h-[100px] mr-[45px]`}
                                     onClick={() => handleDivClick('standard')}>
                                    <div className='w-[120px] h-[100px] mr-[45px] flex justify-center'>
                                        <div className='flex flex-col justify-center'>
                                            <h6 className='font-bold text-white'>Standard</h6>
                                        </div>
                                    </div>
                                </div>
                                {isSectionActive('standard') && (
                                    <div className='flex flex-row justify-center'>
                                        <img src={triangle} className='w-[20px] mr-[44px]' alt="Triangle"/>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col'>
                                <div className={`${isSectionActive('premium') ? 'bg-red-600' : 'bg-red-300'} w-[120px] h-[100px] mr-[30px]`}
                                     onClick={() => handleDivClick('premium')}>
                                    <div className='w-[120px] h-[100px] mr-[30px] flex justify-center'>
                                        <div className='flex flex-col justify-center'>
                                            <h6 className='font-bold text-white'>Premium</h6>
                                        </div>
                                    </div>
                                </div>
                                {isSectionActive('premium') && (
                                    <div className='flex flex-row justify-center'>
                                        <img src={triangle} className='w-[20px] mr-[30px]' alt="Triangle"/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <table className='table-auto leading-[60px]'>
                            <tr className='border-b'>
                                <td className='mt-[50px] mb-[50px] font-light'>Monthly price</td>
                                <td className={`text-center ${isSectionActive('mobile') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('mobile')}>USD2.99</td>
                                <td className={`text-center ${isSectionActive('basic') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('basic')}>USD2.99</td>
                                <td className={`text-center ${isSectionActive('standard') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('standard')}>USD2.99</td>
                                <td className={`text-center ${isSectionActive('premium') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('premium')}>USD2.99</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='mt-[50px] mb-[50px] font-light'>Video quality</td>
                                <td className={`text-center ${isSectionActive('mobile') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('mobile')}>Good</td>
                                <td className={`text-center ${isSectionActive('basic') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('basic')}>Good</td>
                                <td className={`text-center ${isSectionActive('standard') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('standard')}>Better</td>
                                <td className={`text-center ${isSectionActive('premium') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('premium')}>Best</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='mt-[50px] mb-[50px] font-light'>Video quality</td>
                                <td className={`text-center ${isSectionActive('mobile') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('mobile')}>480p</td>
                                <td className={`text-center ${isSectionActive('basic') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('basic')}>720p</td>
                                <td className={`text-center ${isSectionActive('standard') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('standard')}>1080p</td>
                                <td className={`text-center ${isSectionActive('premium') ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleDivClick('premium')}>4K+HDR</td>
                            </tr>
                        </table>
                        <div className='flex flex-row'>
                            <div className='font-light flex-row w-full flex mt-[10px] relative'>
                                <h1 className=' w-[28%]'>Devices you can use to watch</h1>
                                <div
                                    className='w-[658px] columns-4 absolute flex flex-row justify-between ml-[254px] h-[400px]'>
                                    <ul className='w-[165px] flex-row flex justify-center' onClick={() => handleDivClick('mobile')}>
                                        <li className='flex flex-col text-gray-500'>
                                            <div className='mb-[10px]'>
                                                <IoPhonePortraitOutline size={30} className={`${isSectionActive('mobile') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ${isSectionActive('mobile') ? 'text-red-500' : 'text - gray - 500'}`}>Phone</h6>
                                            </div>
                                            <div>
                                                <BsTabletLandscape size={30} className={`${isSectionActive('mobile') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ${isSectionActive('mobile') ? 'text-red-500' : 'text - gray - 500'}`}>Tablet</h6>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='w-[165px] flex-row flex justify-center' onClick={() => handleDivClick('basic')}>
                                        <li className='flex flex-col text-gray-500'>
                                            <div className='mb-[10px] ml-[20px]'>
                                                <IoPhonePortraitOutline size={30} className={`${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}>Phone</h6>
                                            </div>
                                            <div className='mb-[10px] ml-[20px]'>
                                                <BsTabletLandscape size={30} className={`${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}>Tablet</h6>
                                            </div>
                                            <div className='mb-[10px] ml-[18px]'>
                                                <GrPersonalComputer size={40} className={`${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}>Computer</h6>
                                            </div>
                                            <div className='ml-[20px]'>
                                                <RiComputerLine size={40} className={`${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ml-[13px] ${isSectionActive('basic') ? 'text-red-500' : 'text - gray - 500'}`}>TV</h6>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='w-[165px] flex-row flex justify-center' onClick={() => handleDivClick('standard')}>
                                        <li className='flex flex-col text-gray-500'>
                                            <div className='mb-[10px] ml-[27px]'>
                                                <IoPhonePortraitOutline size={30} className={`${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 mr-[13px] ${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}>Phone</h6>
                                            </div>
                                            <div className='mb-[10px] ml-[28px]'>
                                                <BsTabletLandscape size={30} className={`${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 mr-[13px] ${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}>Tablet</h6>
                                            </div>
                                            <div className='mb-[10px] ml-[25px]'>
                                                <GrPersonalComputer size={40} className={`${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 mr-[13px] ${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}>Computer</h6>
                                            </div>
                                            <div className='ml-[28px]'>
                                                <RiComputerLine size={40} className={`${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ml-[12px] ${isSectionActive('standard') ? 'text-red-500' : 'text - gray - 500'}`}>TV</h6>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='w-[165px] flex-row flex justify-center' onClick={() => handleDivClick('premium')}>
                                        <li className='flex flex-col text-gray-500'>
                                            <div className='mb-[10px] ml-[30px]'>
                                                <IoPhonePortraitOutline size={30} className={`${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 mr-[13px] ${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}>Phone</h6>
                                            </div>
                                            <div className='mb-[10px] ml-[30px]'>
                                                <BsTabletLandscape size={30} className={`${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 mr-[13px] ${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}>Tablet</h6>
                                            </div>
                                            <div className='mb-[10px] ml-[25px]'>
                                                <GrPersonalComputer size={40} className={`${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 mr-[13px] ${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}>Computer</h6>
                                            </div>
                                            <div className='ml-[27px]'>
                                                <RiComputerLine size={40} className={`${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}/>
                                                <h6 className={`text-[12px] text-gray-500 ml-[13px] ${isSectionActive('premium') ? 'text-red-500' : 'text - gray - 500'}`}>TV</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[250px]'>
                        <p className='text-gray-500 text-[13px]'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                        <p className='text-gray-500 text-[13px] mt-[10px]'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                    </div>
                    <div className='w-full justify-center flex flex-row mt-[30px]'>
                        <div className='w-[450px]'>
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
