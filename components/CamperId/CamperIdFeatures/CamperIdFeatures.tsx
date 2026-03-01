import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdFeatures.module.css";
import RVItemEquipments from "@/components/Catalog/CatalogGrid/RVItem/RVItemEquipments/RVItemEquipments";

const CamperIdFeatures = ({ rv }: RVItemProps) => {
  const splitCamelCaseCapitalized = (str: string) => {
    if (!str) return "";
    const result = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <div className={css.features}>
      <div>
        <RVItemEquipments rv={rv} />
      </div>
      <div className={css.featuresDetails}>
        <h3 className={css.featuresDetailsTitle}>Vehicle details</h3>
        <span className={css.featuresDetailsLine}></span>
        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemText}>Form</p>
            <p className={css.vehicleDetailsItemText}>
              {splitCamelCaseCapitalized(rv.form)}
            </p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemText}>Length</p>
            <p className={css.vehicleDetailsItemText}>{rv.length}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemText}>Width</p>
            <p className={css.vehicleDetailsItemText}>{rv.width}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemText}>Height</p>
            <p className={css.vehicleDetailsItemText}>{rv.height}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemText}>Tank</p>
            <p className={css.vehicleDetailsItemText}>{rv.tank}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemText}>Consumption</p>
            <p className={css.vehicleDetailsItemText}>{rv.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperIdFeatures;
