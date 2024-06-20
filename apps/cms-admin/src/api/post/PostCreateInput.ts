import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { RatingCreateNestedManyWithoutPostsInput } from "./RatingCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  publishedAt?: Date | null;
  ratings?: RatingCreateNestedManyWithoutPostsInput;
  seoDescription?: string | null;
  seoTitle?: string | null;
  title?: string | null;
};
