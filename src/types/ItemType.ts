import type { MainImageType } from "./MainImageType";

export interface ItemType {
  listing_id: number;
  state?: string;
  url: string;
  MainImage?: MainImageType;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};
