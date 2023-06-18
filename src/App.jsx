import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organisms/Navbar/Navbar.jsx";
import DogList from "./pages/DogList.jsx";
import SearchDog from "./pages/SearchDog.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<DogList />} />
        <Route path="/searchDog" element={<SearchDog />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
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
