import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md">
      {/* Left side (Logo and Hamburger Menu) */}
      <div className="flex items-center gap-12">
        <div className="text-lg font-bold px-6 text-[#39CEF3]">LOGO</div>
        <div >
          <RxHamburgerMenu />
        </div>
      </div>

      {/* Right side (Icons, Notifications, Profile) */}
      <div className="flex items-center gap-6">
        <div className="p-3 hidden md:block">
          <FaRegCirclePlay />
        </div>
        <button className="p-2 bg-blue-100 rounded-full hidden sm:block">🔔</button>
        <div className="flex items-center gap-2">
          <img
            src="/contact_icon.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:block">Paddy Avate</span>
        </div>
      </div>

      {/* Mobile view - Add Hamburger Menu button */}
      <div className="lg:hidden flex items-center gap-4">
        <RxHamburgerMenu className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
