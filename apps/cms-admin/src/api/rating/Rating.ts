import { Post } from "../post/Post";
import { User } from "../user/User";

export type Rating = {
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
  user?: User | null;
  value: number | null;
};
