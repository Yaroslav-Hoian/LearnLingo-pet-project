import clsx from "clsx";
import css from "./RVFilterEngine.module.css";
import { RVEngine, RVFilterItemProps } from "@/types/RV";
import IconJust from "@/components/utils/IconJust";

const RVFilterEngine = ({ filters, setFilters }: RVFilterItemProps) => {
  const options = [
    { value: "diesel", label: "Diesel", icon: "Diesel" },
    { value: "petrol", label: "Petrol", icon: "Petrol" },
    { value: "hybrid", label: "Hybrid", icon: "Hybrid" },
  ];

  return (
    <div className={css.engineTypeBox}>
      <h3 className={css.engineTypeTitle}>Engine</h3>
      <div className={css.engineTypeLine}></div>
      <ul className={css.engineTypeList}>
        {options.map(({ value, label, icon }) => (
          <li
            key={value}
            className={clsx(
              css.engineTypeItem,
              filters.engine === value && css.engineTypeItemActive,
            )}
            onClick={() =>
              setFilters({ ...filters, engine: value as RVEngine })
            }
          >
            <IconJust width={32} height={32} icon={icon} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RVFilterEngine;
