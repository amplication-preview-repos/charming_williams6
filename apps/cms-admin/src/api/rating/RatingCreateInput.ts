import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
