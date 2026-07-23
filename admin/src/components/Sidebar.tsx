import { NavLink } from "react-router-dom";
import { useAdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import type { ReactNode } from "react";

export default function Sidebar() {
  const { atoken } = useAdminContext();
  const sidebarOptions = [
    { image: assets.home_icon, name: "Dashboard" },
    { image: assets.appointment_icon, name: "All Appointments" },
    { image: assets.add_icon, name: "Add Doctor" },
    { image: assets.people_icon, name: "Doctors List" },
  ];
  return (
    <div className="min-h-screen bg-white border-r border-gray-300">
      {atoken ? (
        <ul className=" text-[#515151] mt-5">
          {sidebarOptions.map((el, index): ReactNode => {
            return (
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""}`
                }
                key={index}
                to={
                  index === 0
                    ? "/admin-dashboard"
                    : `/${el.name.split(" ").join("-").toLowerCase()}`
                }
              >
                <img src={el.image} alt="" />
                <p>{el.name}</p>
              </NavLink>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
