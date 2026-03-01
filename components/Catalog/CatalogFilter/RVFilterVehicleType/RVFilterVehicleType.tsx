import { RVFilterParams, RVForm } from "@/types/RV";
import css from "./RVFilterVehicleType.module.css";
import clsx from "clsx";
import IconJust from "@/components/utils/IconJust";

export interface RVFilterVehicleTypeProps {
  filters: RVFilterParams;
  setFilters: (filters: RVFilterParams) => void;
}

const RVFilterVehicleType = ({
  filters,
  setFilters,
}: RVFilterVehicleTypeProps) => {
  const options = [
    { value: "panelTruck", label: "Van", icon: "Van" },
    {
      value: "fullyIntegrated",
      label: "Fully Integrated",
      icon: "Fully-Integrated",
    },
    { value: "alcove", label: "Alcove", icon: "Alcove" },
  ];

  return (
    <div className={css.vehicleTypeBox}>
      <h3 className={css.vehicleTypeTitle}>Vehicle type</h3>
      <div className={css.vehicleTypeLine}></div>
      <ul className={css.vehicleTypeList}>
        {options.map(({ value, label, icon }) => (
          <li
            key={value}
            className={clsx(
              css.vehicleTypeItem,
              filters.form === value && css.vehicleTypeItemActive,
            )}
            onClick={() => setFilters({ ...filters, form: value as RVForm })}
          >
            <IconJust width={32} height={32} icon={icon} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RVFilterVehicleType;
