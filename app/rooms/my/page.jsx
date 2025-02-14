import getMyRooms from "@/app/actions/getMyRooms";
import Heading from "@/components/Heading";
import MyRoomCard from "@/components/MyRoomCard";
import React from "react";

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();

  return (
    <>
      <Heading title="My Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room, index) => (
          <MyRoomCard
            key={room.$id}
            room={room}
            index={index + 1}
          />
        ))
      ) : (
        <p className="text-center sm:text-xl md:text-2xl">
          You have no room listings.
        </p>
      )}
    </>
  );
};

export default MyRoomsPage;
