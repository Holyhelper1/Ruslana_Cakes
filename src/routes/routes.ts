import { Main } from "../Components/Main/main-page";
import { NotFound } from "../Components/NotFound/NotFound";
import { BentoPlusCupcakes } from "../Components/Pages/Bento-plus-cupcakes/BentoPlusCupcakes";
import { Bento } from "../Components/Pages/Bento/Bento";
import { Cakes } from "../Components/Pages/Cakes/Cakes";
import { Cupcakes } from "../Components/Pages/Cupcakes/Cupcakes";
import { Meringue } from "../Components/Pages/Meringue/Meringue";
import { AdminLogin } from "./../Components/Pages/Admin-login/Admin-login";
import { AdminControlPanel } from "./../Components/Pages/AdminControlPanel/AdminControlPanel";

export interface RouteConfig {
  path: string;
  component: React.FC; 
}

type RoutesArray = RouteConfig[];

export const routes: RoutesArray = [
  { path: "/", component: Main },
  { path: "/adminlogin", component: AdminLogin },
  { path: "/admin/control-panel", component: AdminControlPanel },
  { path: "/cakes", component: Cakes },
  { path: "/cupcakes", component: Cupcakes },
  { path: "/bento", component: Bento },
  { path: "/meringue", component: Meringue },
  { path: "/bento_plus_cupcakes", component: BentoPlusCupcakes },
  {path: "*", component: NotFound},
];
