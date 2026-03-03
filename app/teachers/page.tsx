"use client";

import { useEffect, useState } from "react";
import { getTeachers } from "@/lib/api/teachers";
import TeacherCard from "@/components//TeachersCatalog/TeachersCard";
import { Teacher } from "@/types/teacher";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);

  const loadTeachers = async () => {
    const newTeachers = await getTeachers(4, lastKey || undefined);

    if (newTeachers.length > 0) {
      setTeachers((prev) => [...prev, ...newTeachers]);
      setLastKey(newTeachers[newTeachers.length - 1].id);
      console.log(newTeachers);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Teachers</h1>

      <div className="grid grid-cols-2 gap-6">
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>

      <button
        onClick={loadTeachers}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Load more
      </button>
    </div>
  );
}
