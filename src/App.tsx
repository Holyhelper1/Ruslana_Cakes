// import './firebase';
// import { Route, Routes } from "react-router";
// import { Footer } from "./Components/Footer/Footer";
// import { Header } from "./Components/Header/Header";
// import { RouteConfig, routes } from "./routes/routes";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { initialize } from "./Slices/authSlice";

// const App: React.FC = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(initialize());
//   }, []);
//   return (
//     <>
//       <Header />
//       <Routes>
//         {routes.map(({ path, component: Component }: RouteConfig) => (
//           <Route key={path} path={path} element={<Component />} />
//         ))}
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;

import './firebase';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { RouteConfig, routes } from "./routes/routes";
import { initialize } from "./Slices/authSlice";
import { auth } from './firebase'; // Импортируйте auth из firebase

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log("User state changed:", user);
        });

        return () => unsubscribe();
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
