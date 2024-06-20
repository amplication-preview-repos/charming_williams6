import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  isApproved?: boolean | null;
  post?: PostWhereUniqueInput | null;
};
