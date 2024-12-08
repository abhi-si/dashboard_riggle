import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md w-full">
      {/* Left side (Logo and Hamburger Menu) */}
      <div className="flex items-center gap-4 sm:gap-12">
        <div className="text-lg font-bold text-[#39CEF3]">LOGO</div>
        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden flex items-center gap-4 px-4">
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </div>

      {/* Right side (Icons, Notifications, Profile) */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Play Icon (visible only on medium and larger screens) */}
        <div className="p-3 hidden md:block">
          <FaRegCirclePlay />
        </div>
        {/* Notification Icon (visible only on small and larger screens) */}
        <button className="p-2 bg-blue-100 rounded-full hidden sm:block">🔔</button>
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <img
            src="/contact_icon.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          {/* Name visible only on medium and larger screens */}
          <span className="hidden md:block">Paddy Avate</span>
        </div>
      </div>

      {/* Mobile View - Hamburger Menu button on mobile */}
      <div className="lg:hidden flex items-center gap-4 px-4">
        <RxHamburgerMenu className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
