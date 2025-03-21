import { Main } from "../Components/Main/main-page";
import { AdminLogin } from "./../Components/Pages/Admin-login/Admin-login";
import { AdminControlPanel } from "./../Components/Pages/AdminControlPanel/AdminControlPanel";

export interface RouteConfig {
  path: string;
  component: React.FC; 
}

type RoutesArray = RouteConfig[];

export const routes: RoutesArray = [
  { path: "/Ruslana_Cakes", component: Main },
  { path: "/Ruslana_Cakes/adminlogin", component: AdminLogin },
  { path: "/Ruslana_Cakes/admin/control-panel", component: AdminControlPanel },
];
