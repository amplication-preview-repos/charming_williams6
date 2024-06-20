import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isApproved?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
