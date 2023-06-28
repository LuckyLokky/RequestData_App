import { all } from "redux-saga/effects";
import { usersSaga } from "../ducks/users/sagas";
import { postsSaga } from "../ducks/posts/sagas";
import { photosSaga } from "../ducks/photos/sagas";

export function* rootSaga() {
  yield all([usersSaga(), postsSaga(), photosSaga()]);
}
