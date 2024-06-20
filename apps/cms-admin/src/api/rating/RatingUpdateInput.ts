import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
