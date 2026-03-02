"use client";
// import Hero from "@/components/Hero/Hero";
import { getTeachers } from "@/lib/api";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const lala = async () => {
      const res = await getTeachers(filter);
      console.log(res);
    };

    lala();
  }, []);
  return <>lala</>;
};

export default Home;
