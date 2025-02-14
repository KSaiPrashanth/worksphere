import Heading from "@/components/Heading";
import React from "react";
import BookedRoomCard from "@/components/BookedRoomCard";
import getMyBookings from "../actions/getMyBookings";

const BookingsPage = async () => {
  const bookings = await getMyBookings();
  return (
    <>
      <Heading title="My Bookings" />
      {bookings.length === 0 ? (
        <p className="text-center sm:text-xl md:text-2xl">
          You have no bookings.
        </p>
      ) : (
        bookings.map((booking, index) => (
          <BookedRoomCard
            key={booking.$id}
            booking={booking}
            index={index + 1}
          />
        ))
      )}
    </>
  );
};

export default BookingsPage;
