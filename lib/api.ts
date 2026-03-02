import { db } from "./firebase";
import { get, ref } from "firebase/database";
import { Teacher } from "@/types/teacher";

// type Filters = {
//   language?: string;
//   level?: string;
//   maxPrice?: number;
//   lastDoc?: QueryDocumentSnapshot<DocumentData> | null;
// };

export async function getTeachers(fillter?) {
  try {
    const snapshot = await get(ref(db, "/"));
    if (snapshot.exists()) {
      const data: Teacher[] = snapshot.val();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
}
