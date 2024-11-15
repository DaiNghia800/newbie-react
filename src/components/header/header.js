import logo from '../../assets/images/Horizon UI Logo.svg';
import { Logo } from '../logo/logo';

export const Header = () => {
    return(
        <>
            <header className='py-[23px]'>
            <div className='container mx-auto'>
            <div className='inner-wrap flex items-center justify-between'>
            {/* Logo  */}
            <Logo
            logo={logo}
            />    

            {/* Menu  */}
            <nav className="">
                <ul className="flex">
                    <li className="mx-[24px]">
                    <a href="/" className="font-[400] text-[14px]">Products</a>
                    </li>
                    <li className="mx-[24px]">
                    <a href="/" className="font-[400] text-[14px]">Features</a>
                    </li>
                    <li className="mx-[24px]">
                    <a href="/" className="font-[400] text-[14px]">Pricing</a>
                    </li>
                    <li className="mx-[24px]">
                    <a href="/" className="font-[400] text-[14px]">Company</a>
                    </li>
                </ul>
                </nav>  
            {/* Button */}
            <div className="flex items-center">
                <button className="font-[400] text-[14px]">
                    Log In
                </button>
                <button className="px-[16px] py-[8px] text-primary font-[700] text-[14px] bg-[#E9E3FF] rounded-[10px] ml-[20px]">
                    Sign Up
                </button>
                </div>
            </div>
            </div>
            </header>
        </>
    )
}