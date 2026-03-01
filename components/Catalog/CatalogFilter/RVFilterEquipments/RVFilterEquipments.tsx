import clsx from "clsx";
import { RVFilterItemProps, RVFilterParams } from "@/types/RV";
import css from "./RVFilterEquipments.module.css";
import IconJust from "@/components/utils/IconJust";

const RVFilterEquipment = ({ filters, setFilters }: RVFilterItemProps) => {
  const equipmentOptions: {
    key: keyof RVFilterParams;
    label: string;
    icon: string;
  }[] = [
    { key: "AC", label: "AC", icon: "AC" },
    { key: "radio", label: "Radio", icon: "Radio" },
    { key: "kitchen", label: "Kitchen", icon: "Kitchen" },
    { key: "TV", label: "TV", icon: "TV" },
    { key: "refrigerator", label: "Refrigerator", icon: "Refrigerator" },
    { key: "microwave", label: "Microwave", icon: "Microwave" },
    { key: "bathroom", label: "Bathroom", icon: "Bathroom" },
    { key: "gas", label: "Gas", icon: "Gas" },
    { key: "water", label: "Water", icon: "Water" },
  ];

  const toggleFilter = (key: keyof RVFilterParams) => {
    setFilters({
      ...filters,
      [key]: !filters[key],
    });
  };

  return (
    <div className={css.equipmentFiltersBox}>
      <h4 className={css.equipmentFiltersTitle}>Vehicle equipment</h4>
      <div className={css.equipmentFiltersLine}></div>
      <ul className={css.equipmentFiltersList}>
        {equipmentOptions.map(({ key, label, icon }) => {
          const active = filters[key];

          return (
            <li
              key={key}
              className={clsx(
                css.equipmentFiltersItem,
                active && css.equipmentFiltersItemActive,
              )}
              onClick={() => toggleFilter(key)}
            >
              <IconJust width={32} height={32} icon={icon} />
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RVFilterEquipment;
