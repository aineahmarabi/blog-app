import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bottom-0 bg-purple-500 h-auto py-10 mt-20">
            <div className="flex flex-col items-center border-b border-white mx-5">
                <h1 className="text-white font-bold text-2xl sm:text-xl m-5 text-center">Join the Journey, Share the Story</h1>
                <p className="max-w-4xl mx-auto text-center text-white text-base sm:text-base m-5">
                    Welcome to Jewel in the Mines! Here, we explore everything from adventure to inspiration, with stories that spark curiosity and conversation. As they say, "The best stories are those we share together." Thank you for being part of the adventure.
                </p>
            </div>
            <div className="flex justify-start space-x-6 mt-6 mx-5">
                <a href="https://x.com/ImeldaNasubo?t=ESLtPc_zfQAhBVbuF6FTrg&s=09" target="_blank" className="text-white hover:text-black">
                    <FaXTwitter  size={20} />
                </a>
                <a href="https://medium.com/@JewelInTheMines" target="_blank" className="text-white hover:text-black">
                    <FaMediumM   size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nasubo-imelda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-white hover:text-blue-700">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
            <div className="text-center text-white text-sm mt-6">
                <p>© 2024 Jewel in the Mines. All rights reserved.</p>
            </div>
        </div>
    );
}
