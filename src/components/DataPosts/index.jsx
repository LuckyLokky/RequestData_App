import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_POSTS_DATA_REQUESTED } from "../../ducks/posts/actions";
import {
  postsDataSelector,
  isPostsFetching,
  isPostsError,
} from "../../ducks/posts/selectors";
import Header from "../Header";
import Preloader from "../Preloader";
import ErrorMessage from "../ErrorMessage";

const url = "https://jsonplaceholder.typicode.com/posts";

const DataPosts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(postsDataSelector);
  const handleClick = () => dispatch(ACTION_GET_POSTS_DATA_REQUESTED(url));

  return (
    <div className="DataPosts">
      <Header />
      <Preloader isDataFetching={isPostsFetching} />
      <ErrorMessage isError={isPostsError} />
      <button onClick={handleClick}>Get posts data</button>
      <ul>
        {postsData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataPosts;
