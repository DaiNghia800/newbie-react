import imageSection1 from '../../assets/images/Section1-Image.png';
import { GiMoon } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { ButtonGetStarted } from '../buttons/buttonGetStarted';
export const Section1 = () => {
    return (
        <>
        <div className="">
            <div className="mx-auto container flex flex-wrap justify-between h-[640px]">
                <div className="w-3/5 pt-[98px] pb-[113px]">
                    <div className="mr-[118px]">
                        <h2 className="text-primary text-[14px] font-bold tracking-[3px] flex items-center"> 
                           <GiMoon className='mr-[4px] origin-center rotate-90'/>  TRENDIEST TAILWIND TEMPLATES
                        </h2>
                        <h1 className='text-dark font-[800] text-[60px]'>Take your website to the next level with Horizon UI</h1>
                        <p className='text-[14px] font-[500] leading-[30px] text-light mr-[150px]'> Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.</p>
                        <div className='mt-[24px] flex flex-wrap'>
                            <ButtonGetStarted/>
                            <div className='py-[16px] px-[16px] font-[500] text-[14px] flex flex-wrap items-center'>
                            <FaPhoneAlt className='mr-[4px]'/>   
                            <button> Book a free call</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src={imageSection1} alt="Section-1-Image"></img>
                </div>
            </div>
        </div>
        </>
    )
}