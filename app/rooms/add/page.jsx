"use client";
import createRoom from "@/app/actions/createRoom";
import Heading from "@/components/Heading";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const AddRoomPage = () => {
  const [state, formAction] = useActionState(createRoom, {});

  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room created successfully!");
      router.push("/rooms");
    }
  }, [router, state]);
  return (
    <>
      <Heading title="Add a Room" />
      <div className="border border-gray-400 shadow-sm shadow-gray-400 rounded-lg p-6 w-full">
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-bold mb-2"
            >
              Room Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Enter a name (Large Conference Room)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="bg-transparent border border-gray-400 rounded w-full h-24 py-2 px-3"
              placeholder="Enter a description for the room"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="sqft"
              className="block font-bold mb-2"
            >
              Square Feet
            </label>
            <input
              type="number"
              id="sqft"
              name="sqft"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Enter room size in ft"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="capacity"
              className="block font-bold mb-2"
            >
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Number of people the room can hold"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price_per_hour"
              className="block font-bold mb-2"
            >
              Price Per Hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Enter price per hour"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block font-bold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Enter full address"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Location (Building, Floor, Room)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block font-bold mb-2"
            >
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Availability (Monday - Friday, 9am - 5pm)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amenities"
              className="block font-bold mb-2"
            >
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
              placeholder="Amenities CSV (projector, whiteboard, etc.)"
              required
            />
          </div>

          {/* <!-- Image Upload --> */}
          <div className="mb-8">
            <label
              htmlFor="image"
              className="block font-bold mb-2"
            >
              Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              className="bg-transparent border border-gray-400 rounded w-full py-2 px-3"
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-700 border border-blue-600 shadow-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoomPage;
