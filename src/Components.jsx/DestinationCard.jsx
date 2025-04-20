import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

const DestinationCard = () => {
  const [origin, setOrigin] = useState("Dhaka");
  const [destination, setDestination] = useState("Cox's Bazar");
  const [fromDate, setFromDate] = useState("2025-09-01");
  const [toDate, setToDate] = useState("2025-09-12");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ origin, destination, fromDate, toDate });
  };
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 space-y-4"
      >
        <div>
          <label className="text-gray-700 font-semibold">Origin</label>
          <input
            type="text"
            className="input w-full bg-gray-100 text-black font-bold"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold">Destination</label>
          <input
            type="text"
            className="input w-full bg-gray-100 text-black font-bold"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="text-gray-700 font-semibold">From</label>
            <div className="relative">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="input w-full text-gray-700 bg-gray-100"
              />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-gray-700 font-semibold">To</label>
            <div className="relative">
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="input w-full text-gray-700 bg-gray-100"
              />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full bg-primary hover:bg-[#ff8c00] font-semibold"
        >
          Start Booking
        </button>
      </form>
    </section>
  );
};

export default DestinationCard;
