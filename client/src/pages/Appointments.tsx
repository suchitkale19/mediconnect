import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useMemo, useState, type ReactNode } from "react";
import RelatedDoctors from "../components/RelatedDoctors";

export default function Appointments() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useAppContext();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const doctorInfo = doctors.find((doc) => doc._id === docId);

  type Slot = { datetime: Date; time: string };
  // const [docSlots, setDocSlots] = useState<Slot[][]>([]);
  const [slotIndex, setSlotIndex] = useState<number>(0);
  const [slotTime, setSlotTime] = useState<string>("");

  const docSlots = useMemo<Slot[][]>(() => {
    if (!doctorInfo) return [];

    const allSlots: Slot[][] = [];
    const today = new Date();

    for (let i = 0; i <= 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots: Slot[] = [];

      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    return allSlots;
  }, [doctorInfo]);

  // const getAvailableSlots = () => {
  //   const allSlots: Slot[][] = [];

  //   // Current date
  //   const today = new Date();

  //   for (let i = 0; i <= 7; i++) {
  //     // Current day
  //     const currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() + i);

  //     // End time (9:00 PM)
  //     const endTime = new Date(today);
  //     endTime.setDate(today.getDate() + i);
  //     endTime.setHours(21, 0, 0, 0);

  //     // Starting time
  //     if (today.getDate() === currentDate.getDate()) {
  //       currentDate.setHours(
  //         currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
  //       );
  //       currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
  //     } else {
  //       currentDate.setHours(10);
  //       currentDate.setMinutes(0);
  //     }

  //     // Slots for one day
  //     const timeSlots: Slot[] = [];

  //     while (currentDate < endTime) {
  //       const formattedTime = currentDate.toLocaleTimeString([], {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       });

  //       timeSlots.push({
  //         datetime: new Date(currentDate),
  //         time: formattedTime,
  //       });

  //       // Move ahead 30 minutes
  //       currentDate.setMinutes(currentDate.getMinutes() + 30);
  //     }

  //     allSlots.push(timeSlots);
  //   }

  //   setDocSlots(allSlots);
  // };

  // useEffect(() => {
  //   if (doctorInfo) {
  //     getAvailableSlots();
  //   }
  // }, [doctorInfo]);

  if (!doctorInfo) {
    return <p>Doctor not found</p>;
  }

  return (
    doctorInfo && (
      <div className="">
        {/* doctor details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={doctorInfo.image}
              alt="img"
            />
          </div>

          <div className="flex-1 border border-gray-400  rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {doctorInfo.name}
              <img
                className="`w-5"
                src="/src/assets/assets_frontend/verified_icon.svg"
                alt=""
              />
            </p>
            <div className="flex items-center text-sm gap-2 mt-1 text-gray-600">
              <p>
                {doctorInfo.degree} - {doctorInfo.speciality}
              </p>
              <button className="py-0.5  px-2 border text-xs rounded-full">
                {doctorInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About{" "}
                <img src="/src/assets/assets_frontend/info_icon.svg" alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-175 mt-1">
                {doctorInfo.about}
              </p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {doctorInfo.fees * 100}
              </span>
            </p>
          </div>
        </div>

        {/* booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index): ReactNode => {
                return (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`}
                    key={index}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                );
              })}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index): ReactNode => {
                return (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-gray-500 border border-gray-300"}`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </p>
                );
              })}
          </div>

          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book An Appointment
          </button>
        </div>

        {/* listing related doctors */}
        <RelatedDoctors docId={docId} speciality={doctorInfo.speciality} />
      </div>
    )
  );
}
