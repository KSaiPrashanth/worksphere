import Link from "next/link";
import CancelBookingButton from "./CancelBookingButton";
import { FaEye } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

const BookedRoomCard = ({ booking, index }) => {
  const { room_id: room } = booking;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get Year
    const year = date.getFullYear();

    // Get month
    const options = { month: "short" };
    const month = date.toLocaleString("en-US", options, { timeZone: "UTC" });

    // Get day
    const day = date.getUTCDate();

    // Format time in UTC 12-hour
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    const time = date.toLocaleString("en-US", timeOptions);

    // Final formatted string
    return `${day} ${month} ${year} at ${time}`;
  };

  // Calculate the total price
  const calculateTotalPrice = (checkIn, checkOut, pricePerHour) => {
    const checkInTime = new Date(checkIn);
    const checkOutTime = new Date(checkOut);

    // Calculate the difference in hours
    const hoursDifference = Math.abs((checkOutTime - checkInTime) / 36e5);

    // Calculate total price
    return hoursDifference * pricePerHour;
  };

  const totalPrice = calculateTotalPrice(
    booking.check_in,
    booking.check_out,
    room.price_per_hour
  );

  // Get the current date and time
  // Adjust current time by the timezone offset in minutes
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset() * 60000;
  const localCurrentTime = new Date(currentDate.getTime() - timezoneOffset);

  // Compare the current date with the check-in date
  const checkInDate = new Date(booking.check_in);

  // Hide the delete button if the check-in date has passed
  const isCheckInPassed = localCurrentTime >= checkInDate;

  return (
    <div className="border border-gray-400 shadow-sm rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="space-y-1">
        <h4 className="text-2xl font-semibold">
          {index}. {room.name}
        </h4>
        <div className="ml-5 text-gray-400">
          <p className="text-sm">
            <strong> Booking Id:</strong>{" "}
            {booking.$id}
          </p>
          <p className="text-sm">
            <strong>Check In:</strong>{" "}
            {formatDate(booking.check_in)}
          </p>
          <p className="text-sm">
            <strong>Check Out:</strong>{" "}
            {formatDate(booking.check_out)}
          </p>
          <p className="text-sm">
            <strong>Total Price:</strong> $
            {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full sm:w-auto space-x-4 font-semibold mt-2">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-blue-800 border-2 border-blue-500 px-4 py-2 rounded-md mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-900 flex items-center justify-center gap-1"
        >
          <FaEye />
          View
        </Link>

        {/* Conditionally render the CancelBookingButton based on check-in time */}
        {!isCheckInPassed && <CancelBookingButton bookingId={booking.$id} />}
        {isCheckInPassed && (
          <>
            <button
              disabled
              name="cancel"
              className="text-red-400 border-2 border-red-400 px-4 py-2 rounded-md mb-2 sm:mb-0 w-full sm:w-auto text-center flex items-center justify-center gap-1 relative group cursor-not-allowed"
            >
              <FcCancel />
              Cancel
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                you can not cancel less than 24 hours before.
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookedRoomCard;
