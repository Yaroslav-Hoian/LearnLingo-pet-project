import clsx from "clsx";
import css from "./RVFilterTransmission.module.css";
import { RVFilterItemProps, RVTransmission } from "@/types/RV";
import IconJust from "@/components/utils/IconJust";

const RVFilterTransmission = ({ filters, setFilters }: RVFilterItemProps) => {
  const options = [
    { value: "automatic", label: "Automatic", icon: "Automatic" },
    { value: "manual", label: "Manual", icon: "Manual-transmission" },
  ];

  return (
    <div className={css.transmissionTypeBox}>
      <h3 className={css.transmissionTypeTitle}>Transmisson</h3>
      <div className={css.vehicleTypeLine}></div>
      <ul className={css.transmissionTypeList}>
        {options.map(({ value, label, icon }) => (
          <li
            key={value}
            className={clsx(
              css.transmissionTypeItem,
              filters.transmission === value && css.transmissionTypeItemActive,
            )}
            onClick={() =>
              setFilters({ ...filters, transmission: value as RVTransmission })
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

export default RVFilterTransmission;
