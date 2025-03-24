import { Route, Routes } from "react-router";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { RouteConfig, routes } from "./routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initialize } from "./Slices/authSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, component: Component }: RouteConfig) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
