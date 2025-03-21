import { Route, Routes } from "react-router";
// import { Catalog } from './Components/Catalog/Catalog'
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { RouteConfig, routes } from "./routes/routes";
// import { Location } from './Components/Location/Location'
// import { Main } from './Components/Main/main'

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Main />
    <Catalog />
    <Location /> */}
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
