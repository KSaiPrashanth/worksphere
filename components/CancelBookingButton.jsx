"use client";
import { toast } from "react-toastify";
import cancelBooking from "@/app/actions/cancelBooking";
import { FcCancel } from "react-icons/fc";

const CancelBookingButton = ({ bookingId }) => {
  const handleCancelClick = async () => {
    if (!confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    try {
      const result = await cancelBooking(bookingId);

      if (result.success) {
        toast.success("Booking cancelled successfully!");
      }
    } catch (error) {
      console.log("Failed to cancel booking", error);
      return {
        error: "Failed to cancel booking",
      };
    }
  };

  return (
    <button
      onClick={handleCancelClick}
      className="text-red-700 bg-red-100 border-2 border-red-400 px-4 py-2 rounded-md mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-200 flex items-center justify-center gap-1"
    >
      <FcCancel />
      Cancel
    </button>
  );
};

export default CancelBookingButton;
