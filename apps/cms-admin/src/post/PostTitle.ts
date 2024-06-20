import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "seoTitle";

export const PostTitle = (record: TPost): string => {
  return record.seoTitle?.toString() || String(record.id);
};
