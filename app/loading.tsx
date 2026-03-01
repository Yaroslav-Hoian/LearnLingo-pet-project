import { FadeLoader } from "react-spinners";
import css from "./loading.module.css";

const Loading = () => {
  return (
    <div className={css.loadingContainer}>
      <FadeLoader color="#D84343" />
    </div>
  );
};

export default Loading;
