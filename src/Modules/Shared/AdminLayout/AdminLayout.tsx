import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

export default function AdminLayout() {
  return (
    <Box component={"div"} sx={{ display: "flex" }}>
      <Box
        component={"nav"}
        sx={{ width: "240px", bgcolor: "#f5f5f5", minHeight: "100vh" }}
      >
        <AdminSidebar />
      </Box>
      <Box component={"div"} sx={{ flexGrow: 1, p: 3 }}>
        <AdminNavbar />
        <Outlet />
      </Box>
    </Box>
  );
}
