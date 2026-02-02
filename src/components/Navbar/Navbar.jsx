import { useEffect, useState } from "react";
import { IoBagHandle, IoCloseSharp, IoHeart, IoSearch } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showmenu, setshowmenu] = useState(false);
    const [isScrolled, setisScrolled] = useState(false)
    const toggleMenu = () => {
        setshowmenu(!showmenu);
    }

    useEffect(() => {
        const handlerScroll = () => {
            setisScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handlerScroll);
        return () => window.removeEventListener('scroll', handlerScroll)
    }, [])
    return (
        <header className={`bg-white fixed  top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ''} `}>
            <nav className="max-w-350 mx-auto px-10 md:h-[12vh] h-[8vh] flex items-center justify-between">
                {/* logo */}
                <Link to= '/'
                    className="text-2xl font-semibold"
                 >My<span className="text-green-500 font-bold text-3xl">B</span>asket<span className="text-green-500 font-bold text-3xl">.</span></Link>

                {/* ------------------------------- Dektop Menu---------------------------------- */}
                <ul className="md:flex hidden items-center gap-x-8 ">
                    <li>
                        <a
                            className="border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out md:text-sm lg:text-base "
                            href="#">Home</a>
                    </li>
                    <li>
                        <a
                            className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out md:text-sm lg:text-base"
                            href="#">About Us</a>
                    </li>
                    <li>
                        <a
                            className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out md:text-sm lg:text-base"
                            href="#">Process</a>
                    </li>
                    <li>
                        <a
                            className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out md:text-sm lg:text-base"
                            href="#">Contact Us</a>
                    </li>
                </ul>

                {/* Nav-Action */}
                <div className="flex items-center gap-x-5">
                    {/* Input Field */}
                    <div className=" lg:flex items-center p-1 border-2 border-green-500 rounded-full hidden ">
                        <input
                            className=" flex-1 px-3 h-[5vh] outline-0"
                            type="text" name="text" id="text" placeholder="search" autoComplete="off" />
                        <button className="bg-linear-to-b from-green-400 to bg-green-500
                    rounded-full text-white h-7 w-7 flex justify-center items-center text-xl cursor-pointer hover:bg-gray-900"><IoSearch /></button>
                    </div>
                    <a href="#" className="text-2xl text-zinc-800 hover:text-green-600">
                        <IoHeart />
                    </a>
                    <a href="#" className="text-2xl text-zinc-800 hover:text-green-600">
                        <IoBagHandle />
                    </a>
                    {/* Hamburger open */}
                    <span
                        onClick={toggleMenu}
                        className="text-zinc-800 text-2xl md:hidden cursor-pointer">
                        <RiMenu3Line />
                    </span>
                </div>
                {/* ------------------------------- Dektop Menu---------------------------------- */}

                {/* ------------------------------- MobileMenu---------------------------------- */}
                <ul className={`md:hidden flex flex-col gap-y-10 absolute top-0 transition-all duration-500 ${showmenu ? 'right-0' : '-right-full'} bg-green-400/62 backdrop-blur-md py-10 pt-22 px-8 w-56 min-h-screen`}>
                    {/* Close */}
                    <span
                        onClick={toggleMenu}
                        className="text-zinc-800 w-8 hover:text-white text-3xl md:hidden absolute right-7 top-7 cursor-pointer">
                        <IoCloseSharp />
                    </span>
                    <li>
                        <a
                            className="font-semibold tracking-wider 
                           hover:border-b-2 hover:border-gray-100 text-zinc-700"
                            href="#">Home</a>
                    </li>
                    <li>
                        <a
                            className="font-semibold tracking-wider 
                           hover:border-b-2 hover:border-gray-100 text-zinc-700"
                            href="#">About Us</a>
                    </li>
                    <li>
                        <a
                            className="font-semibold tracking-wider 
                           hover:border-b-2 hover:border-gray-100 text-zinc-700"
                            href="#">Process</a>
                    </li>
                    <li>
                        <a
                            className="font-semibold tracking-wider 
                           hover:border-b-2 hover:border-gray-100 text-zinc-700 "
                            href="#">Contact Us</a>
                    </li>
                    <li className="w-35 h-0.5 bg-white"></li>
                    <li className=" flex items-center p-1 border-2 border-white rounded-full">
                        <input
                            className="flex-1 px-3 h-10 outline-0 bg-transparent text-zinc-800 placeholder:text-zinc-600 w-full"
                            type="text"
                            placeholder="Search..."
                            autoComplete="off"
                        />
                        <button className="bg-green-600 rounded-full text-white h-8 w-8 flex justify-center items-center text-xl cursor-pointer">
                            <IoSearch />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;