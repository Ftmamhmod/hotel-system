import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../../../Images/logo.png";

export default function AuthLayout() {
  const { pathname } = useLocation();
  // console.log(pathname)
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          size={{xs:12, md:6}}
          sx={{
            display: "flex",
            flexDirection: "column",
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
        <Grid size={{xs:12, md:6}} sx={{ padding: "10px", height: "100%" }}>
          {(pathname == "/login") && (
            <Container className="login-bg auth-bg">
                <h2>Sign in to Roamhome</h2>
            </Container>
          )}

          {(pathname == "/change-password") && (
            <Container className="change-bg auth-bg">
                <h2>Change Password</h2>
            </Container>
          )}

          {(pathname == "/register") && (
            <Container className="register-bg auth-bg">
                <h2>Sign up to Roamhome</h2>
            </Container>
          )}

          {(pathname == "/forgot-password") && (
            <Container className="forgot-bg auth-bg">
                <h2>Forgot Password</h2>
            </Container>
          )}

          {(pathname == "/reset-password") && (
            <Container className="reset-bg auth-bg">
                <h2>Reset Password</h2>
            </Container>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
