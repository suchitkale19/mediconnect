import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const lists = ["Home", "About us", "Contact us", "Privacy Policy"];
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div>
          <img
            onClick={() => navigate("/")}
            className="mb-5 w-40 cursor-pointer"
            src="/src/assets/assets_frontend/logo.svg"
            alt="logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            debitis eligendi expedita eius quisquam voluptate possimus, ab
            architecto laborum incidunt maxime. Alias magnam commodi officia et,
            soluta voluptatum architecto est?
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            {lists.map((el, index): ReactNode => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
        {/* right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>+91-212-234-2345</li>
            <li>prescripto@booking.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-sm py-5 text-center">
          Copyright 2024@ Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
