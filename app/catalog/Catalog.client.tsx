"use client";

import RVList from "@/components/Catalog/CatalogGrid/RVList/RVList";
import { fetchRV } from "@/lib/api";
import { useRVDraftStore } from "@/lib/store/RVStore";
import css from "./Catalog.client.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "../loading";
import RVFilter from "@/components/Catalog/CatalogFilter/RVFilter";

const CatalogClient = () => {
  const {
    rv,
    limit,
    filters,
    total,
    setRVs,
    addRVs,
    resetFilters,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    setFilters,
  } = useRVDraftStore();

  const filtersKey = JSON.stringify(filters);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["campers", page, filtersKey],
    queryFn: () =>
      fetchRV({
        page,
        limit,
        ...filters,
      }),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!data || isPlaceholderData) return;

    if (page === 1) {
      setRVs(data.items, data.total);
    } else {
      addRVs(data.items);
    }
  }, [data, page, setRVs, addRVs, isPlaceholderData]);

  const handleReset = () => {
    if (!filters || Object.keys(filters).length === 0) return;
    resetFilters();
    setPage(1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  const loadMore = rv.length < total;
  return (
    <section className={css.catalogClientContainer}>
      <RVFilter
        setFilters={setFilters}
        filters={filters}
        onReset={handleReset}
      />
      <div className={css.catalogClientSubContent}>
        {rv.length > 0 && (
          <RVList
            items={rv}
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
            isFavorite={isFavorite}
          />
        )}
        {loadMore && (
          <button
            type="button"
            className={css.loadMoreBtn}
            onClick={() => setPage((p) => p + 1)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogClient;
