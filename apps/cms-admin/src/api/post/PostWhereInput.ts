import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  publishedAt?: DateTimeNullableFilter;
  ratings?: RatingListRelationFilter;
  seoDescription?: StringNullableFilter;
  seoTitle?: StringNullableFilter;
  title?: StringNullableFilter;
};
