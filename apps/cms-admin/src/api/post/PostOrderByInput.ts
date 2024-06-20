import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  seoDescription?: SortOrder;
  seoTitle?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
