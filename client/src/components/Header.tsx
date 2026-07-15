export default function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px:20">
      {/* left side */}
      <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 py-10  m-auto md:py-[10vw] md:-mb-7.5">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light ">
          <img
            className="w-28"
            src="/src/assets/assets_frontend/group_profiles.png"
            alt="group"
          />
          <p>
            Simply browse through our extensive list of trusted doctors ,
            <br className="hidden sm:block" />
            schedule your appointment hastle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book Appointment{" "}
          <img
            className="w-3"
            src="/src/assets/assets_frontend/arrow_icon.svg"
            alt=""
          />
        </a>
      </div>

      {/* right side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute  bottom-0 h-auto rounded-lg"
          src="/src/assets/assets_frontend/header_img.png"
          alt=""
        />
      </div>
    </div>
  );
}
