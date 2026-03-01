export interface GalleryRV {
  thumb: string;
  original: string;
}

export interface ReviewsRV {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type RVForm = "panelTruck" | "fullyIntegrated" | "alcove";

export type RVTransmission = "automatic" | "manual";

export type RVEngine = "diesel" | "petrol" | "hybrid";

export interface RV {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: RVForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: RVTransmission;
  engine: RVEngine;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryRV[];
  reviews: ReviewsRV[];
}

export interface RVFilterParams {
  page?: number;
  limit?: number;
  location?: string;
  transmission?: RVTransmission;
  engine?: RVEngine;
  form?: RVForm;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  water?: boolean;
  gas?: boolean;
}

export interface IconProps {
  width: number;
  height: number;
  icon: string;
  className?: string;
}

export interface RVFilterItemProps {
  filters: RVFilterParams;
  setFilters: (filters: RVFilterParams) => void;
}
