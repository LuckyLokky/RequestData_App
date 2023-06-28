import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DataUsers from "./components/DataUsers";
import DataPosts from "./components/DataPosts";
import DataPhotos from "./components/DataPhotos";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/users" element={<DataUsers />}></Route>
          <Route path="/posts" element={<DataPosts />}></Route>
          <Route path="/photos" element={<DataPhotos />}></Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
