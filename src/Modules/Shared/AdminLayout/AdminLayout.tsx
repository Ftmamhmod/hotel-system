import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useTranslation } from "react-i18next";
import "../../../i18n/i18n";

export default function AdminLayout() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };
  return (
    <Box component={"div"} sx={{ display: "flex" }}>
      <Box
        component={"nav"}
        sx={{ width: "240px", bgcolor: "#f5f5f5", minHeight: "100vh" }}
      >
        <AdminSidebar />
      </Box>
      <Box component={"div"} sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button variant="outlined" onClick={toggleLang}>
            {i18n.language === "ar" ? "English" : "العربية"}
          </Button>
        </Box>
        <AdminNavbar />
        <Outlet />
      </Box>
    </Box>
  );
}
