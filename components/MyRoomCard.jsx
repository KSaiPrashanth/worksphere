import Link from "next/link";
import { FaEye } from "react-icons/fa";
import DeleteRoomButton from "./DeleteRoomButton";

const MyRoomCard = ({ room, index }) => {
  return (
    <div className="bg-gray-100 border border-gray-400 shadow-md shadow-gray-400 rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex flex-col gap-1">
        <h4 className="text-2xl font-semibold">
          {index}.{room.name}
        </h4>
        <p className="text-sm text-gray-600 pl-5">
          <strong>Room Id:</strong> {room.$id}
        </p>
      </div>
      <div className="flex flex-row w-full sm:w-auto space-x-4 mt-2 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="text-blue-700 bg-blue-100 border-2 border-blue-400 px-4 py-2 rounded-md mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-200 flex items-center justify-center"
        >
          <FaEye className="inline mr-1" /> View
        </Link>

        <DeleteRoomButton roomId={room.$id} />
      </div>
    </div>
  );
};

export default MyRoomCard;
