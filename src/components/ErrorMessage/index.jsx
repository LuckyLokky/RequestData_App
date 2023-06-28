import { useSelector } from "react-redux";

const ErrorMessage = ({ isError }) => {
  const error = useSelector(isError);
  return error && <h1>{error}</h1>;
};

export default ErrorMessage;
