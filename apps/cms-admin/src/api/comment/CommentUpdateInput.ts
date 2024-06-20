import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  isApproved?: boolean | null;
  post?: PostWhereUniqueInput | null;
};
