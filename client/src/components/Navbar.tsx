import { useState, type ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navOptions = ["Home", "Doctors", "About", "Contact"];
  const navigate = useNavigate();
  // const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src="/src/assets/assets_frontend/logo.svg"
        alt="logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {navOptions.map((el, index): ReactNode => {
          return (
            <NavLink
              key={index}
              to={`/${el === "Home" ? "" : el.toLowerCase()}`}
            >
              <li className="py-1">{el}</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
          );
        })}
      </ul>
      <div className="flex item-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src="/src/assets/assets_frontend/profile_pic.png"
              alt="profile"
            />
            <img
              className="w-2.5"
              src="/src/assets/assets_frontend/dropdown_icon.svg"
              alt="profile"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}
