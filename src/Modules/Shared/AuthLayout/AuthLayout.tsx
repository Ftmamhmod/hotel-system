import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../../../Images/logo.png";

export default function AuthLayout() {
  const { pathname } = useLocation();
  // console.log(pathname)
  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          size={{xs:12, md:6}}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: {xs:'30px', md:'0px'}
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ alignSelf: "flex-start", margin: "30px" }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="sm" sx={{ bgcolor: "white" }}>
              <Outlet />
            </Container>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}} sx={{ padding: "10px", display: "flex",
        flexDirection: "column",
        minHeight: "100%"
         }}>
          {(pathname == "/login") && (
            <Box className="login-bg auth-bg">
                <h2>Sign in to Roamhome</h2>
            </Box>
          )}

          {(pathname == "/change-password") && (
            <Box className="change-bg auth-bg">
                <h2>Change Password</h2>
            </Box>
          )}

          {(pathname == "/register") && (
            <Box className="register-bg auth-bg">
                <h2>Sign up to Roamhome</h2>
            </Box>
          )}

          {(pathname == "/forgot-password") && (
            <Box className="forgot-bg auth-bg">
                <h2>Forgot Password</h2>
            </Box>
          )}

          {(pathname == "/reset-password") && (
            <Box className="reset-bg auth-bg">
                <h2>Reset Password</h2>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
