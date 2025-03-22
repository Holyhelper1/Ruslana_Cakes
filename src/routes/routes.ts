import { Main } from "../Components/Main/main-page";
import { NotFound } from "../Components/NotFound/NotFound";
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
  {path: "*", component: NotFound},
];
