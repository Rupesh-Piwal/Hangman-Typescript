import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-violet-600 flex justify-between items-center h-[60px] sticky">
      <div className="px-[100px] flex gap-[30px]">
        <Link className="text-xl text-white font-semibold" to="/">
          Home
        </Link>
        <Link className="text-xl text-white font-semibold" to="/store">
          Store
        </Link>
        <Link className="text-xl text-white font-semibold" to="/about">
          About
        </Link>
      </div>
      <div className="px-[50px] relative">
        <FaCartShopping
          style={{
            width: "32px",
            height: "32px",
            fill: "white",
            cursor: "pointer",
          }}
        />
        <div className="bg-red-700 text-white  flex justify-center items-center font-bold w-[10px] h-[10px] p-4 absolute bottom-[-10px] rounded-full left-[66px]">
          20
        </div>
      </div>
    </div>
  );
};

export default Navbar;
