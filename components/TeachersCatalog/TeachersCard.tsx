"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} from "@/lib/api//favorites";
import Image from "next/image";
import { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const { user } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      if (!user) return;

      const favs = await getFavorites(user.uid);
      if (favs.includes(teacher.id)) {
        setLiked(true);
      }
    };

    checkFavorite();
  }, [user, teacher.id]);

  const handleLike = async () => {
    if (!user) {
      alert("Only authorized users can add to favorites");
      return;
    }

    if (liked) {
      await removeFromFavorites(user.uid, teacher.id);
      setLiked(false);
    } else {
      await addToFavorites(user.uid, teacher.id);
      setLiked(true);
    }
  };

  return (
    <div className="border p-4 rounded-xl relative">
      <button
        onClick={handleLike}
        className={`absolute top-4 right-4 text-2xl ${
          liked ? "text-red-500" : "text-gray-400"
        }`}
      >
        ❤️
      </button>

      <Image
        width={100}
        height={100}
        src={teacher.avatar_url}
        alt={teacher.name}
        className="w-24 h-24 rounded-full mb-4"
      />

      <h2 className="text-xl font-bold">
        {teacher.name} {teacher.surname}
      </h2>

      <p>Languages: {teacher.languages.join(", ")}</p>
      <p>Levels: {teacher.levels.join(", ")}</p>
      <p>Price: ${teacher.price_per_hour}/hour</p>
      <p>Rating: {teacher.rating}</p>

      {expanded && (
        <div className="mt-4">
          <p>{teacher.experience}</p>
          <p>{teacher.conditions}</p>
          <p>{teacher.lesson_info}</p>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-500 mt-3"
      >
        {expanded ? "Hide" : "Read more"}
      </button>
    </div>
  );
}
