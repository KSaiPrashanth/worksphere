import React from "react";
import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getAllRooms from "../actions/getAllRooms";

export default async function RoomsPage() {
  const rooms = await getAllRooms();

  return (
    <>
      <Heading title="Available Rooms" />

      {rooms.length > 0 ? (
        rooms.map((room) => (
          <RoomCard
            room={room}
            key={room.$id}
          />
        ))
      ) : (
        <p className="text-center sm:text-xl md:text-2xl">
          No rooms available at the movement.
        </p>
      )}
    </>
  );
}
