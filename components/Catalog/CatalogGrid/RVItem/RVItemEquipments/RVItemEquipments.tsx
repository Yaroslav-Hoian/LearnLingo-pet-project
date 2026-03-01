import IconJust from "@/components/utils/IconJust";
import { RVItemProps } from "../RVItem";
import css from "./RVItemEquipments.module.css";

const RVItemEquipments = ({ rv }: RVItemProps) => {
  const equipmentMap = [
    {
      key: "AC",
      label: "AC",
      value: rv.AC,
      icon: <IconJust width={20} height={20} icon="AC" className={css.icon} />,
    },
    {
      key: "bathroom",
      label: "Bathroom",
      value: rv.bathroom,
      icon: <IconJust width={20} height={20} icon="Bathroom" />,
    },
    {
      key: "kitchen",
      label: "Kitchen",
      value: rv.kitchen,
      icon: <IconJust width={20} height={20} icon="Kitchen" />,
    },
    {
      key: "TV",
      label: "TV",
      value: rv.TV,
      icon: <IconJust width={20} height={20} icon="TV" />,
    },
    {
      key: "radio",
      label: "Radio",
      value: rv.radio,
      icon: <IconJust width={20} height={20} icon="Radio" />,
    },
    {
      key: "refrigerator",
      label: "Refrigerator",
      value: rv.refrigerator,
      icon: <IconJust width={20} height={20} icon="Refrigerator" />,
    },
    {
      key: "microwave",
      label: "Microwave",
      value: rv.microwave,
      icon: <IconJust width={20} height={20} icon="Microwave" />,
    },
    {
      key: "gas",
      label: "Gas",
      value: rv.gas,
      icon: <IconJust width={20} height={20} icon="Gas" />,
    },
    {
      key: "water",
      label: "Water",
      value: rv.water,
      icon: <IconJust width={20} height={20} icon="Water" />,
    },
  ];
  return (
    <ul className={css.equipmentList}>
      {equipmentMap
        .filter((item) => item.value)
        .map((item) => (
          <li key={item.key} className={css.equipmentItem}>
            {item.icon}
            <p className={css.equipmentContent}>{item.label}</p>
          </li>
        ))}
    </ul>
  );
};

export default RVItemEquipments;
