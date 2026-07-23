import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAdminContext } from "../context/AdminContext";

export default function Navbar() {
  const { atoken, setAtoken } = useAdminContext();
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    setAtoken("");
    localStorage.removeItem("atoken");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white border-b-gray-300">
      <div className="flex items-center text-xs gap-2">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 rounded-full border-gray-500 text-gray-600">
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
}
