"use client";
import bookRoom from "@/app/actions/bookRoom";
import { useRouter } from "next/navigation";
import React, { useActionState, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ room }) => {
  const [state, formAction] = useActionState(bookRoom, {});
  const router = useRouter();

  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1); // Set max date to 12 months from today

  // Format date to yyyy-mm-dd
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const minDate = formatDate(today);
  const maxDateFormatted = formatDate(maxDate);

  // State to track selected dates and times separately
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle change for check-in date
  const handleCheckInDateChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);

    // Ensure check-out date is not before check-in date
    if (checkOutDate && newCheckInDate > checkOutDate) {
      setCheckOutDate(newCheckInDate); // Reset checkout date if it's earlier
    }
  };

  // Handle change for check-in time
  const handleCheckInTimeChange = (e) => {
    const newCheckInTime = e.target.value;
    setCheckInTime(newCheckInTime);
  };

  // Handle change for check-out date
  const handleCheckOutDateChange = (e) => {
    const newCheckOutDate = e.target.value;
    if (checkInDate && newCheckOutDate < checkInDate) {
      toast.error("Check-out date cannot be before check-in date.");
      return;
    }
    setCheckOutDate(newCheckOutDate);
  };

  // Handle change for check-out time
  const handleCheckOutTimeChange = (e) => {
    const newCheckOutTime = e.target.value;
    if (
      checkInDate &&
      checkOutDate &&
      checkInDate === checkOutDate &&
      checkInTime &&
      newCheckOutTime <= checkInTime
    ) {
      toast.error("Check-out time cannot be before check-in time.");
      return;
    }
    setCheckOutTime(newCheckOutTime);
  };

  // Calculate total price based on the difference between check-in and check-out
  const calculateTotalPrice = useCallback(() => {
    if (checkInDate && checkInTime && checkOutDate && checkOutTime) {
      const checkInDateTime = new Date(`${checkInDate}T${checkInTime}`);
      const checkOutDateTime = new Date(`${checkOutDate}T${checkOutTime}`);

      const diffInHours =
        (checkOutDateTime - checkInDateTime) / (1000 * 60 * 60); // Convert milliseconds to hours

      if (diffInHours > 0) {
        const price = room.price_per_hour * diffInHours;
        setTotalPrice(price);
      } else {
        setTotalPrice(0); // If the time difference is invalid, set price to 0
      }
    } else {
      setTotalPrice(0); // Reset the total price if the date or time is missing
    }
  }, [
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    room.price_per_hour,
  ]);

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room has been booked!");
      router.push("/bookings");
    }
  }, [router, state]);

  // Recalculate the total price whenever check-in/check-out date/time changes
  useEffect(() => {
    calculateTotalPrice();
  }, [
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    calculateTotalPrice,
  ]);

  return (
    <>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Book this Room</h2>
        <form
          action={formAction}
          className="mt-4"
        >
          <input
            type="hidden"
            name="room_id"
            value={room.$id}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="check_in_date"
                className="block text-sm font-medium text-gray-100"
              >
                Check-In Date
              </label>
              <input
                type="date"
                id="check_in_date"
                name="check_in_date"
                className="custom-date bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                min={minDate}
                max={maxDateFormatted}
                value={checkInDate}
                onChange={handleCheckInDateChange}
              />
            </div>
            <div>
              <label
                htmlFor="check_in_time"
                className="block text-sm font-medium text-gray-100"
              >
                Check-In Time
              </label>
              <input
                type="time"
                id="check_in_time"
                name="check_in_time"
                className="custom-date bg-transparent mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                value={checkInTime}
                onChange={handleCheckInTimeChange}
              />
            </div>
            <div>
              <label
                htmlFor="check_out_date"
                className="block text-sm font-medium text-gray-100"
              >
                Check-Out Date
              </label>
              <input
                type="date"
                id="check_out_date"
                name="check_out_date"
                className="custom-date bg-transparent mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                min={checkInDate || minDate}
                max={maxDateFormatted}
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
              />
            </div>
            <div>
              <label
                htmlFor="check_out_time"
                className="block text-sm font-medium text-gray-100"
              >
                Check-Out Time
              </label>
              <input
                type="time"
                id="check_out_time"
                name="check_out_time"
                className="custom-date bg-transparent mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                value={checkOutTime}
                onChange={handleCheckOutTimeChange}
              />
            </div>
          </div>

          {/* Display the total price */}
          <div className="my-6 text-lg font-semibold text-center">
            Total Price: ${totalPrice.toFixed(2)}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Book Room
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
