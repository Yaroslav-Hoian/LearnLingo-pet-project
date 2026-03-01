import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdGallery.module.css";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const CamperIdGallery = ({ rv }: RVItemProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <ul className={css.camperIdGalleryContainer}>
      {rv.gallery.map((image, index) => (
        <li key={index} className={css.camperIdGalleryItem}>
          <Image
            src={image.thumb}
            alt={`${rv.name} image ${index + 1}`}
            width={292}
            height={312}
            className={css.image}
            onClick={() => {
              setIndex(index);
              setOpen(true);
            }}
          />
        </li>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={rv.gallery.map((img) => ({
          src: img.original,
        }))}
      />
    </ul>
  );
};

export default CamperIdGallery;
