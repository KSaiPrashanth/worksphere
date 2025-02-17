import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

const RoomCard = ({ room }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;

  const imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

  const imageSrc = room.image ? imageUrl : "/images/no-image.png";
  return (
    <>
      <div className="border border-gray-400 shadow-sm shadow-gray-400 hover:shadow-blue-400 hover:shadow-md rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
          <Image
            src={imageSrc}
            alt={room.name}
            width={500}
            height={100}
            draggable="false"
            className="w-full sm:w-2/5 sm:h-auto mb-3 sm:mb-0 object-cover rounded-lg"
          />
          <div className="space-y-1 flex flex-col justify-around pr-1">
            <h2 className="text-2xl font-bold h-">{room.name}</h2>
            <div className="space-y-4">
              <p className="text-md text-gray-400">{room.description}</p>
              <p className="text-md text-gray-300">
                <span className="font-semibold text-gray-300"> Address:</span>{" "}
                {room.address}
              </p>
              <p className="text-md text-gray-300">
                <span className="font-semibold text-gray-300">
                  {" "}
                  Availability:{" "}
                </span>
                {room.availability}
              </p>
              <p className="text-md text-gray-300">
                <span className="font-semibold text-gray-300"> Price: </span>$
                {room.price_per_hour}/hour
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
          <Link
            href={`/rooms/${room.$id}`}
            className="bg-blue-800 border-2 border-blue-500 px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FaEye />
            View
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
