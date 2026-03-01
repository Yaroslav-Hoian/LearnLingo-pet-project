"use client";
import Loading from "@/app/loading";
import { fetchRVById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CamperIdClient.module.css";
import CamperIdHeader from "@/components/CamperId/CamperIdInfo/CamperIdHeader/CamperIdHeader";
import CamperIdGallery from "@/components/CamperId/CamperIdInfo/CamperIdGallery/CamperIdGallery";
import CamperIdDescription from "@/components/CamperId/CamperIdInfo/CamperIdDescription/CamperIdDescription";
import CamperIdBooking from "@/components/CamperId/CamperIdBooking/CamperIdBooking";
import CamperIdFeatures from "@/components/CamperId/CamperIdFeatures/CamperIdFeatures";
import CamperIdReviews from "@/components/CamperId/CamperIdReviews/CamperIdReviews";
import { useState } from "react";

const CamperIdClient = () => {
  const [active, setActive] = useState<"features" | "reviews">("features");

  const { id } = useParams<{ id: string }>();

  const {
    data: rv,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camperId", id],
    queryFn: () => fetchRVById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error || !rv) {
    throw error;
  }
  return (
    <section className={css.camperIdClientContainer}>
      <div className={css.camperIdClientInfoContent}>
        <CamperIdHeader rv={rv} />
        <CamperIdGallery rv={rv} />
        <CamperIdDescription rv={rv} />
      </div>
      <div className={css.camperIdToggleBox}>
        <div className={css.camperIdToggle}>
          <button
            type="button"
            onClick={() => setActive("features")}
            className={`${css.camperToggleBtn} ${
              active === "features" ? css.active : ""
            }`}
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => setActive("reviews")}
            className={`${css.camperToggleBtn} ${
              active === "reviews" ? css.active : ""
            }`}
          >
            Reviews
          </button>
        </div>
        <span className={css.camperIdToggleLine}></span>
      </div>
      <div className={css.camperIdToggleBookingContent}>
        {active === "features" ? (
          <CamperIdFeatures rv={rv} />
        ) : (
          <CamperIdReviews rv={rv} />
        )}
        <CamperIdBooking />
      </div>
    </section>
  );
};

export default CamperIdClient;
