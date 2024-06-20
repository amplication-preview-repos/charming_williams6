import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
