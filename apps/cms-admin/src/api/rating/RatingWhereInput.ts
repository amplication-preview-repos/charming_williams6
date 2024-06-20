import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RatingWhereInput = {
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  user?: UserWhereUniqueInput;
  value?: IntNullableFilter;
};
