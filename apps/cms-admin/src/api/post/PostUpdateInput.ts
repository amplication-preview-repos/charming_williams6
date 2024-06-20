import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { RatingUpdateManyWithoutPostsInput } from "./RatingUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  publishedAt?: Date | null;
  ratings?: RatingUpdateManyWithoutPostsInput;
  seoDescription?: string | null;
  seoTitle?: string | null;
  title?: string | null;
};
