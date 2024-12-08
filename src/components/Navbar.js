import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md w-full fixed top-0 bg-white z-50">
      {/* Left side (Logo and Hamburger Menu) */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="text-lg font-bold text-[#39CEF3]">LOGO</div>
        {/* Hamburger Menu for mobile (hidden on desktop) */}
        <div className="lg:hidden">
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </div>

      {/* Right side (Icons, Notifications, Profile) */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Play Icon */}
        <div className="hidden md:block text-xl">
          <FaRegCirclePlay />
        </div>
        {/* Notification Icon */}
        <button className="p-2 bg-blue-100 rounded-full hidden sm:block">
          🔔
        </button>
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <img
            src="/contact_icon.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          {/* Profile name (visible on medium screens and larger) */}
          <span className="hidden md:block">Paddy Avate</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
