import RoomCard from "@/components/RoomCard";
import getAllRooms from "@/app/actions/getAllRooms";
import React from "react";
import Heading from "./Heading";

const Rooms = () => {
  const rooms = getAllRooms();
  return (
    <div>
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <RoomCard
            room={room}
            key={room.id}
          />
        ))
      ) : (
        <p className="text-center sm:text-xl md:text-2xl">
          No rooms available at the movement.
        </p>
      )}
    </div>
  );
};

export default Rooms;
