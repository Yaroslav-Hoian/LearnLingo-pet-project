import { RV } from "@/types/RV";
import css from "./RVList.module.css";
import RVItem from "../RVItem/RVItem";
interface RVListProps {
  items: RV[];
  onAddToFavorites: (rv: RV) => void;
  onRemoveFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const RVList = ({
  items,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite,
}: RVListProps) => {
  return (
    <ul className={css.rvList}>
      {items.map((rv) => (
        <RVItem
          key={rv.id}
          rv={rv}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
          isFavorite={isFavorite}
        />
      ))}
    </ul>
  );
};

export default RVList;
