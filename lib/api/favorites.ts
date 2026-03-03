import { db } from "@/lib/firebase";
import { ref, set, remove, get } from "firebase/database";

export const addToFavorites = async (uid: string, teacherId: string) => {
  await set(ref(db, `users/${uid}/favorites/${teacherId}`), true);
};

export const removeFromFavorites = async (uid: string, teacherId: string) => {
  await remove(ref(db, `users/${uid}/favorites/${teacherId}`));
};

export const getFavorites = async (uid: string) => {
  const snapshot = await get(ref(db, `users/${uid}/favorites`));

  if (!snapshot.exists()) return [];

  return Object.keys(snapshot.val());
};
