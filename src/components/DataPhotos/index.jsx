import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_PHOTOS_DATA_REQUESTED } from "../../ducks/photos/actions";
import {
  photosDataSelector,
  isPhotosFetching,
  isPhotosError,
} from "../../ducks/photos/selectors";
import Header from "../Header";
import Preloader from "../Preloader";
import ErrorMessage from "../ErrorMessage";

const url = "https://jsonplaceholder.typicode.com/photos";

const DataPhotos = () => {
  const dispatch = useDispatch();
  const photosData = useSelector(photosDataSelector);
  const handleClick = () => dispatch(ACTION_GET_PHOTOS_DATA_REQUESTED(url));

  return (
    <div className="DataPhotos">
      <Header />
      <Preloader isDataFetching={isPhotosFetching} />
      <ErrorMessage isError={isPhotosError} />
      <button onClick={handleClick}>Get photos data</button>
      <ul>
        {photosData.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt="random_photo" />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DataPhotos;
