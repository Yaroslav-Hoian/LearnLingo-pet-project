import IconJust from "@/components/utils/IconJust";
import css from "./RVFilterLocation.module.css";
import { RVFilterItemProps } from "@/types/RV";

const RVFilterLocation = ({ filters, setFilters }: RVFilterItemProps) => {
  return (
    <div className={css.locationContainer}>
      <label htmlFor="location" className={css.locationLabel}>
        Location
      </label>
      <div className={css.locationInputContainer}>
        <input
          id="location"
          name="location"
          className={css.locationInput}
          type="text"
          value={filters.location || ""}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value.trim() })
          }
          placeholder="City"
        />
        <IconJust
          width={20}
          height={20}
          icon="Map"
          className={css.locationIcon}
        />
      </div>
    </div>
  );
};

export default RVFilterLocation;
