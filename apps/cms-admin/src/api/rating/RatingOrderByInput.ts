import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
