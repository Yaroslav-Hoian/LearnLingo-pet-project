import { fetchRV } from "@/lib/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog - Travel Trucks",
  description:
    "Browse our camper van catalog and find the perfect RV for your next adventure. Filter by location, vehicle type, and equipment to choose the best option for your travel needs.",
  openGraph: {
    title: "Catalog - Travel Trucks",
    description:
      "Browse our camper van catalog and find the perfect RV for your next adventure. Filter by location, vehicle type, and equipment to choose the best option for your travel needs.",
    url: "https://travel-trucks-virid-theta.vercel.app/catalog",
    images: [
      {
        url: "/images/homePage/Picture-1x.png",
        width: 1200,
        height: 630,
        alt: "Travel Trucks",
      },
    ],
  },
};

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["campers", 1, "{}"],
    queryFn: () =>
      fetchRV({
        page: 1,
        limit: 4,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
