import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organisms/Navbar/Navbar.jsx";
import DogList from "./pages/DogList.jsx";
import SearchDog from "./pages/SearchDog.jsx";
import FullDogImage from "./pages/FullDogImage";
import ImageContext from "./contexts/ImageContex";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<DogList />} />
        <Route path="/searchDog" element={<SearchDog />} />
        <Route path="/fullDogImage" element={<FullDogImage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <ImageContext>
        <RouterProvider router={router} />
      </ImageContext>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};
export default App;
