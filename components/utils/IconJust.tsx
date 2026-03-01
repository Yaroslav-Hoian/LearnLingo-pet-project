import { IconProps } from "@/types/RV";

const IconJust = ({ width, height, icon, className }: IconProps) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/sprite/sprite.svg#icon-${icon}`} />
    </svg>
  );
};

export default IconJust;
