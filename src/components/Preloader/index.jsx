import { useSelector } from "react-redux";

const Preloader = ({ isDataFetching }) => {
  const isFetching = useSelector(isDataFetching);
  return isFetching && <h1>LOADING...</h1>;
};

export default Preloader;
