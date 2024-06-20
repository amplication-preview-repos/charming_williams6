import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Rating } from "../rating/Rating";

export type Post = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  publishedAt: Date | null;
  ratings?: Array<Rating>;
  seoDescription: string | null;
  seoTitle: string | null;
  title: string | null;
  updatedAt: Date;
};
