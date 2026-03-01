import { RV } from "@/types/RV";
import Image from "next/image";
import css from "./RVItem.module.css";
import RVItemHeader from "./RVItemHeader/RVItemHeader";
import RVItemDescription from "./RVItemDescription/RVItemDescription";
import RVItemEquipments from "./RVItemEquipments/RVItemEquipments";
import Link from "next/link";

export interface RVItemProps {
  rv: RV;
}

export interface RVFavoriteProps extends RVItemProps {
  onAddToFavorites: (rv: RV) => void;
  onRemoveFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const RVItem = ({
  rv,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite,
}: RVFavoriteProps) => {
  return (
    <li className={css.rvItem}>
      <div className={css.rvImageWrapper}>
        <Image
          src={rv.gallery[0].thumb}
          alt={rv.name}
          className={css.rvImage}
          width={292}
          height={320}
        />
      </div>
      <div className={css.rvInfo}>
        <RVItemHeader
          rv={rv}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
          isFavorite={isFavorite}
        />
        <RVItemDescription rv={rv} />
        <RVItemEquipments rv={rv} />
        <button className={css.rvItemBtn}>
          <Link href={`/catalog/${rv.id}`}>Show more</Link>
        </button>
      </div>
    </li>
  );
};

export default RVItem;
