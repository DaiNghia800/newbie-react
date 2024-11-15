import { Logo } from "../logo/logo";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaGithub, FaInstagram  } from "react-icons/fa6";



export const Footer = () => {
    return (
        <>
         <div className="text-center container mx-auto py-[80px]">
            <div className="inline-flex">
              <Logo />
            </div>
            <div>
                <div className="flex justify-center gap-[48px] mt-[32px] text-[14px] font-[600] text-light">
                    <a href="/">About</a>
                    <a href="/">Features</a>
                    <a href="/">Blog</a>
                    <a href="/">Resources</a>
                    <a href="/">Partners</a>
                    <a href="/">Help</a>
                    <a href="/">Terms</a>
                </div>
                <div className="flex justify-center gap-[32px] mt-[32px] text-[19px] font-[600] text-light">
                    <a href="/"><FaFacebookF /></a>
                    <a href="/"><TiSocialTwitter /></a>
                    <a href="/"><FaGithub /></a>
                    <a href="/"><FaLinkedin /></a>
                    <a href="/"><FaInstagram /></a>
                </div>
            </div>
            <div className="mt-[32px] text-[14px] font-[500] text-light">
                <span>© 2023, Horizon UI Library. All rights reserved.</span>
            </div>
         </div>
        </>
    )
}