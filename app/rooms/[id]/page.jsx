import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import BookingForm from "@/components/BookingForm";
import getSingleRoom from "@/app/actions/getSingleRoom";

const page = async ({ params }) => {
  const { id } = await params;
  const room = await getSingleRoom(id);

  if (!room) {
    return <Heading title="Room Not Found" />;
  }

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;

  const imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

  const imageSrc = room.image ? imageUrl : "/images/no-image.png";

  const location = room.address;
  const encodedLocation = encodeURIComponent(location);
  const mapUrl = `https://google.com/maps?q=${encodedLocation}`;

  return (
    <>
      <Heading title={room.name} />
      <div className="bg-gray-300 shadow-sm shadow-gray-500 rounded-lg p-6 text-gray-700">
        <Link
          href="/rooms"
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <FaChevronLeft />
          <span className="ml-1">Back to Rooms</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={imageSrc}
            width={500}
            height={100}
            alt={room.name}
            draggable="false"
            className="w-full sm:w-1/3 h-64 object-fill rounded-lg"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="text-gray-600 mb-4 text-xl">{room.description}</p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size: </span>{" "}
                {room.sqft}
                sq ft
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Availability:{" "}
                </span>
                {room.availability}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price: </span>$
                {room.price_per_hour}/hour
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address: </span>
                {room.address}
              </li>

              <li>
                <Link
                  href={mapUrl}
                  rel="noopener noreferrer"
                  className="font-semibold text-green-800 hover:text-blue-800 inline-flex items-center gap-2"
                  target="_blank"
                >
                  Locate on Map
                  <SiGooglemaps />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-400 mt-6"></div>

        <BookingForm room={room} />
      </div>
    </>
  );
};

export default page;
