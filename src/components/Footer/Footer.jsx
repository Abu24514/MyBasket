import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#f8f8f8] pt-16 pb-8 px-6 md:px-12 font-sans text-gray-700">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Section */}
                <div className="space-y-4">
                    <a
                        className="text-2xl font-bold flex items-center"
                        href="#">My<span className="text-green-500 font-bold text-3xl">B</span>asket<span className="text-green-500 font-bold text-3xl">.</span></a>
                    <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                        Bred for a high content of beneficial substances.
                        Our products are all fresh and healthy, delivered straight to your door.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <a href="#" className="hover:text-green-500 transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><FaInstagram /></a>
                        <a href="#" className="hover:text-green-500 transition-colors"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Company</h3>
                    <ul className="space-y-4 text-sm">
                        <li> <a
                            className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out "
                            href="#">About Us</a></li>
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">Our Team</a></li>
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">Careers</a></li>
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">FAQ's</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Support</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">Support Center</a></li>
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">Feedback</a></li>
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">Contact Us</a></li>
                        <li><a href="#"  className="hover:border-b-2 border-green-500 tracking-wider text-zinc-700 transition duration-150 ease-in-out ">Shipping Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <p className="text-sm mb-6 text-gray-500">
                        Questions or Feedback? <br />
                         We'd love to hear from you.
                    </p>
                    <form className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-all text-sm shadow-sm"
                        />
                        <button
                            type="submit"
                            className="absolute right-1 bg-green-500 text-white p-2.5 rounded-md hover:bg-green-700 transition-colors"
                            aria-label="Subscribe"
                        >
                            <FaArrowRight size={14} />
                        </button>
                    </form>
                </div>
            </div>

            <hr className="my-12 border-gray-200" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                <p>2026 © MyBasket. All Rights Reserved</p>

                {/* Extra: Payment Icons */}
                <div className="flex space-x-6 my-4 md:my-0 text-xl">
                    <FaCcVisa className="hover:text-gray-600 cursor-pointer transition-colors" />
                    <FaCcMastercard className="hover:text-gray-600 cursor-pointer transition-colors" />
                    <FaCcPaypal className="hover:text-gray-600 cursor-pointer transition-colors" />
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;