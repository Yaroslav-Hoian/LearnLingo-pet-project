import { RVItemProps } from "../RVItem";
import css from "./RVItemDesctiption.module.css";

const RVItemDescription = ({ rv }: RVItemProps) => {
  return (
    <div>
      <p className={css.description}>{rv.description}</p>
    </div>
  );
};

export default RVItemDescription;
