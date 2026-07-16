export default function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full max-w-90"
          src="/src/assets/assets_frontend/contact_image.png"
          alt="about"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>
          <p className="text-gray-500">
            54709 Willims Station <br /> Suite 350 , Washington , USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0123 <br /> Email: greatStavk@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            {" "}
            Carees at Prescripto
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black  hover:text-white transition-all cursor-pointer duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
