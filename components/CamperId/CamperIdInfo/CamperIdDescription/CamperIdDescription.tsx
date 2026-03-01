import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdDescription.module.css";

const CamperIdDescription = ({ rv }: RVItemProps) => {
  return <p className={css.camperIdDescription}>{rv.description}</p>;
};

export default CamperIdDescription;
