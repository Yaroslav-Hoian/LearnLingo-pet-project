import { fetchRVById } from "@/lib/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CamperIdClient from "./CamperIdClient";
import { Metadata } from "next";

type CamperIdProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: CamperIdProps): Promise<Metadata> {
  const { id } = await params;
  const rv = await fetchRVById(id);
  return {
    title: `${rv.name}`,
    description: `${rv.description}`,
    openGraph: {
      title: `${rv.name}`,
      description: `${rv.description}`,
      url: `https://travel-trucks-virid-theta.vercel.app/catalog/${id}`,
      images: [
        {
          url: `${rv.gallery[0].thumb}`,
          width: 1200,
          height: 630,
          alt: `${rv.name}`,
        },
      ],
    },
  };
}

export default async function CamperId({ params }: CamperIdProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camperId", id],
    queryFn: () => fetchRVById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperIdClient />
    </HydrationBoundary>
  );
}
