import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdHeader.module.css";
import IconJust from "@/components/utils/IconJust";

const CamperIdHeader = ({ rv }: RVItemProps) => {
  return (
    <div className={css.rvInfoHeader}>
      <h2 className={css.rvName}>{rv.name}</h2>
      <div className={css.rvInfoHeaderDetails}>
        <div className={css.rvInfoReviewrsLocation}>
          <div className={css.rvInfoReviewrsLocationWrapper}>
            <IconJust
              width={16}
              height={16}
              icon="Star"
              className={css.starFilled}
            />
            <p className={`${css.rvInfoReviewrsLocationText} ${css.underline}`}>
              {rv.rating} ({rv.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.rvInfoReviewrsLocationWrapper}>
            <IconJust width={16} height={16} icon="Map" />
            <p className={css.rvInfoReviewrsLocationText}>{rv.location}</p>
          </div>
        </div>
        <span className={css.rvPrice}>€{rv.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CamperIdHeader;
