import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_USERS_DATA_REQUESTED } from "../../ducks/users/actions";
import {
  usersDataSelector,
  isUsersFetching,
  isUsersError,
} from "../../ducks/users/selectors";
import Header from "../Header";
import Preloader from "../Preloader";
import ErrorMessage from "../ErrorMessage";
const url = "https://jsonplaceholder.typicode.com/users";

const DataUsers = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(usersDataSelector);
  const handleClick = () => dispatch(ACTION_GET_USERS_DATA_REQUESTED(url));

  return (
    <div className="DataUsers">
      <Header />
      <Preloader isDataFetching={isUsersFetching} />
      <ErrorMessage isError={isUsersError} />
      <button onClick={handleClick}>Get users data</button>
      <ul>
        {usersData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataUsers;
