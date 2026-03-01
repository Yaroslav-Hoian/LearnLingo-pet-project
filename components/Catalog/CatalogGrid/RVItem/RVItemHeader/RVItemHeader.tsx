import css from "./RVItemHeader.module.css";
import { RVFavoriteProps } from "../RVItem";
import IconJust from "@/components/utils/IconJust";
import clsx from "clsx";
import toast from "react-hot-toast";

const RVItemHeader = ({
  rv,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite,
}: RVFavoriteProps) => {
  const favorite = isFavorite(rv.id);
  const handleToggleFavorite = () => {
    if (favorite) {
      onRemoveFromFavorites(rv.id);
      toast.success("Camper remove from favorite");
    } else {
      onAddToFavorites(rv);
      toast.success("Camper add to favorite");
    }
  };
  return (
    <div className={css.rvInfoHeader}>
      <div className={css.rvInfoTitle}>
        <h2 className={css.rvName}>{rv.name}</h2>
        <div className={css.rvPriceWrapper}>
          <span className={css.rvPrice}>€{rv.price.toFixed(2)}</span>
          <button
            className={css.favoriteButton}
            onClick={handleToggleFavorite}
            aria-label="Add to favorites"
          >
            <IconJust
              width={24}
              height={24}
              icon="Like"
              className={clsx(css.favoriteIcon, favorite && css.active)}
            />
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default RVItemHeader;
