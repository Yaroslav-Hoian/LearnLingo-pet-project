import { db } from "@/lib/firebase";
import { Teacher } from "@/types/teacher";
import {
  ref,
  query,
  get,
  orderByKey,
  limitToFirst,
  startAfter,
} from "firebase/database";

export const getTeachers = async (limit: number, lastKey?: string) => {
  let teachersQuery;

  if (lastKey) {
    teachersQuery = query(
      ref(db, "teachers"),
      orderByKey(),
      startAfter(lastKey),
      limitToFirst(limit),
    );
  } else {
    teachersQuery = query(
      ref(db, "teachers"),
      orderByKey(),
      limitToFirst(limit),
    );
  }

  const snapshot = await get(teachersQuery);

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  return Object.entries(data).map(([id, value]) => ({
    ...(value as Teacher),
    id,
  }));
};
