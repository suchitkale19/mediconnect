import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState, type ReactNode } from "react";

export default function Doctors() {
  const { speciality } = useParams();

  const { doctors } = useAppContext();

  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const filterDoc = speciality
    ? doctors.filter((doc) => doc.speciality === speciality)
    : doctors;

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors Specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border border-gray-300 rounded text-sm transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}
        >
          {specialities.map((el, index): ReactNode => {
            return (
              <p
                onClick={() =>
                  speciality === el
                    ? navigate("/doctors")
                    : navigate(`/doctors/${el}`)
                }
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === el ? "bg-indigo-100 text-black" : ""}`}
                key={index}
              >
                {el}
              </p>
            );
          })}
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((doc, index): ReactNode => {
            return (
              <div
                onClick={() => navigate(`/appointments/${doc._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cusor-pointer hover:-translate-y-2.5 transition-all duration-500"
                key={index}
              >
                <img className="bg-blue-50" src={doc.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 rounded-full bg-green-500"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {doc.name}
                  </p>
                  <p className="text-gray-600 text-sm">{doc.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
