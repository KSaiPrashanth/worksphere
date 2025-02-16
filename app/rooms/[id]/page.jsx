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

  const location = room.location + ", " + room.address;
  const encodedLocation = encodeURIComponent(location);
  const mapUrl = `https://google.com/maps?q=${encodedLocation}`;

  return (
    <>
      <Heading title={room.name} />
      <div className="shadow-sm shadow-gray-400 rounded-lg p-4 border border-gray-400">
        <Link
          href="/rooms"
          className="flex items-center text-gray-400 hover:text-gray-300 mb-4"
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
            className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="text-gray-200 mb-4 text-xl">{room.description}</p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-100">Size: </span>{" "}
                {room.sqft}
                sq ft
              </li>
              <li>
                <span className="font-semibold text-gray-100">
                  Availability:{" "}
                </span>
                {room.availability}
              </li>
              <li>
                <span className="font-semibold text-gray-100">Price: </span>$
                {room.price_per_hour}/hour
              </li>
              <li>
                <span className="font-semibold text-gray-100">Address: </span>
                {room.location}
                {", "}
                {room.address}
              </li>

              <li>
                <Link
                  href={mapUrl}
                  rel="noopener noreferrer"
                  className="font-semibold border-2 border-green-500 px-3 py-2 rounded-md bg-green-800 hover:bg-green-900 inline-flex items-center gap-2 mt-2"
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
