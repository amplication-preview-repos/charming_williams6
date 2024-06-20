import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
