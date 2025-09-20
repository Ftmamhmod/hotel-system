import { Outlet } from "react-router-dom";
import MasterNavbar from "../MasterNavbar/MasterNavbar";
import MasterFooter from "../MasterFooter/MasterFooter";
import MasterAnonymousNavbar from "../MasterAnonymousNavbar/MasterAnonymousNavbar";

export default function MasterLayout() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <MasterNavbar />
      ) : (
        <MasterAnonymousNavbar />
      )}
      <Outlet />
      <MasterFooter />
    </>
  );
}
