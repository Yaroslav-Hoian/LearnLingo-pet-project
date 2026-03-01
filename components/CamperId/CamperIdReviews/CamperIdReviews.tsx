import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdReviews.module.css";
import { Rating } from "react-simple-star-rating";
import IconJust from "@/components/utils/IconJust";
import FirstLater from "./FirstLater";

const CamperIdReviews = ({ rv }: RVItemProps) => {
  return (
    <ul className={css.reviews}>
      {rv.reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.reviewItemHeader}>
            <div className={css.avatar}>
              <FirstLater
                name={review.reviewer_name}
                className={css.firstLater}
              />
            </div>
            <div className={css.reviewerInfo}>
              <h4 className={css.reviewName}>{review.reviewer_name}</h4>
              <Rating
                className={css.rating}
                allowFraction
                initialValue={review.reviewer_rating}
                emptyIcon={
                  <IconJust
                    width={16}
                    height={16}
                    icon="Star"
                    className={css.starEmpty}
                  />
                }
                fillIcon={
                  <IconJust
                    width={16}
                    height={16}
                    icon="Star"
                    className={css.starFilled}
                  />
                }
                readonly
              />
            </div>
          </div>
          <p className={css.reviewItemText}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperIdReviews;
