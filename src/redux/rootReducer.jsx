import { usersReducer } from "../ducks/users/reducer";
import { postsReducer } from "../ducks/posts/reducer";
import { photosReducer } from "../ducks/photos/reducer";

export const rootReducer = {
  users: usersReducer,
  posts: postsReducer,
  photos: photosReducer,
};
