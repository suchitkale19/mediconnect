import type { ReactNode } from "react";
import { specialityData } from "../assets/assets_frontend/assets.ts";
import { Link } from "react-router-dom";

export default function SpecialityMenu() {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Find By Speciality</h1>
      <p className="w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors , schedule
        your appointment hastle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow scroll">
        {specialityData.map((doc, index): ReactNode => {
          return (
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500 "
              key={index}
              to={`/doctors/${doc.speciality}`}
            >
              <img className="w-16 sm-w-24 mb-2" src={doc.image} alt="img" />
              <p>{doc.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
