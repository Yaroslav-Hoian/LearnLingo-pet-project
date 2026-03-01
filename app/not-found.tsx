import type { Metadata } from "next";
import NotFound from "./not-found.client";

export const metadata: Metadata = {
  title: "404 - Page Not Found - Travel Trucks",
  description: "The page you are looking for does not exist on Travel Trucks",
  openGraph: {
    title: "404 - Page Not Found - Travel Trucks",
    description: "The page you are looking for does not exist on Travel Trucks",
    url: "https://travel-trucks-virid-theta.vercel.app/not-found",
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

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
