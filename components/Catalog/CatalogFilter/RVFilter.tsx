"use client";

import css from "./RVFilter.module.css";

import { useEffect, useState } from "react";
import RVFilterLocation from "@/components/Catalog/CatalogFilter/RVFilterLocation/RVFilterLocation";
import RVFilterEquipment from "@/components/Catalog/CatalogFilter/RVFilterEquipments/RVFilterEquipments";
import RVFilterVehicleType from "@/components/Catalog/CatalogFilter/RVFilterVehicleType/RVFilterVehicleType";
import { RVFilterParams } from "@/types/RV";
import RVFilterTransmission from "./RVFilterTransmission/RVFilterTransmission";
import RVFilterEngine from "./RVFilterEngine/RVFilterEngine";

interface RVFilterProps {
  filters: RVFilterParams;
  setFilters: (filters: RVFilterParams) => void;
  onReset: () => void;
}

const RVFilter = ({ filters, setFilters, onReset }: RVFilterProps) => {
  const [localFilters, setLocalFilters] = useState<RVFilterParams>({});

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasFilters = Object.keys(localFilters).length === 0;

    if (hasFilters) {
      return;
    }
    setFilters(localFilters);
  };

  const handleResetLocal = () => {
    setLocalFilters({});
    onReset();
  };

  return (
    <form className={css.sidebarForm} onSubmit={handleSubmit}>
      <RVFilterLocation filters={localFilters} setFilters={setLocalFilters} />
      <div className={css.filtersContainer}>
        <h3 className={css.filtersTitle}>Filters</h3>
        <RVFilterTransmission
          filters={localFilters}
          setFilters={setLocalFilters}
        />
        <RVFilterEquipment
          filters={localFilters}
          setFilters={setLocalFilters}
        />
        <RVFilterEngine filters={localFilters} setFilters={setLocalFilters} />
        <RVFilterVehicleType
          filters={localFilters}
          setFilters={setLocalFilters}
        />
      </div>
      <div className={css.formBtnBox}>
        <button type="submit" className={css.formBtnSubmit}>
          Search
        </button>
        <button
          type="button"
          onClick={handleResetLocal}
          className={css.formBtnReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default RVFilter;
