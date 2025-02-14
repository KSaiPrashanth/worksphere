"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllRooms() {
  try {
    const { databases } = await createAdminClient();

    // Fetch Rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ROOMS
    );

    if (rooms.length === 0) {
      setTimeout(() => revalidatePath("/rooms", "layout"), 0);
    }

    return rooms;
  } catch (error) {
    console.log("Failed to get rooms", error);
    redirect("/error");
  }
}

export default getAllRooms;
