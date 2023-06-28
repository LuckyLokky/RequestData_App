import { initialState as initialUsersState } from "../ducks/users/reducer";
import { initialState as initialPostsState } from "../ducks/posts/reducer";
import { initialState as initialPhotosState } from "../ducks/photos/reducer";

export const initialState = {
  users: initialUsersState,
  posts: initialPostsState,
  photos: initialPhotosState,
};
