import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { RegisterTypes } from "../../../Services/INTERFACES";
import { axiosInstance, USERS_URLS } from "../../../Services/END_POINTS";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
  PHONE_VALIDATION,
  REQUIRED_VALIDATION,
} from "../../../Services/VALIDATIONS";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loading from "../../../Images/loading.gif";
import google from "../../../Images/google.webp";
import facebook from "../../../Images/facebook.png";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterTypes>();

  const onSubmit = async (data: RegisterTypes) => {
    try {
      const response = await axiosInstance.post(USERS_URLS.REGISTER, data);
      console.log(response);
      toast.success(response.data.message);
      navigate("/login");
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "600" }}>
          Sign up
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginY: "20px" }}>
          If you already have an account register
          <Typography>
            You can {""}
            <Link
              href="/register"
              underline="none"
              sx={{ color: "#EB5148", fontWeight: "bold" }}
            >
              Login here !
            </Link>
          </Typography>
        </Typography>
      </Box>
      <Box onSubmit={handleSubmit(onSubmit)} component="form" marginTop={'40px'}>
        {/* Username */}
        <FormControl fullWidth>
          <Typography color="#152C5B">User Name</Typography>
          <FilledInput
            {...register("userName", REQUIRED_VALIDATION("Username"))}
            id="userName"
            placeholder="Please type here..."
            disableUnderline
            sx={{
              bgcolor: "#F5F6F8",
              borderRadius: "4px",
              marginTop: "10px",
              "& .MuiInputBase-input": {
                py: "10px",
                "::placeholder": {
                  color: "#b4b4b4ff",
                },
              },
            }}
          />
          {errors.userName && (
            <Typography sx={{ color: "red" }}>
              {errors.userName.message as string}
            </Typography>
          )}
        </FormControl>

        {/* Phone number - Country */}
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Phone number */}
            <FormControl fullWidth>
              <Typography color="#152C5B">Phone Number</Typography>
              <FilledInput
                {...register("phoneNumber", PHONE_VALIDATION)}
                id="phoneNumber"
                placeholder="Please type here..."
                disableUnderline
                sx={{
                  bgcolor: "#F5F6F8",
                  borderRadius: "4px",
                  marginTop: "10px",
                  "& .MuiInputBase-input": {
                    py: "10px",
                    "::placeholder": {
                      color: "#b4b4b4ff",
                    },
                  },
                }}
              />
              {errors.phoneNumber && (
                <Typography sx={{ color: "red" }}>
                  {errors.phoneNumber.message as string}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {/* Country */}
            <FormControl fullWidth>
              <Typography color="#152C5B">Country</Typography>
              <FilledInput
                {...register("country", REQUIRED_VALIDATION("Country"))}
                id="country"
                placeholder="Please type here..."
                disableUnderline
                sx={{
                  bgcolor: "#F5F6F8",
                  borderRadius: "4px",
                  marginTop: "10px",
                  "& .MuiInputBase-input": {
                    py: "10px",
                    "::placeholder": {
                      color: "#b4b4b4ff",
                    },
                  },
                }}
              />
              {errors.country && (
                <Typography sx={{ color: "red" }}>
                  {errors.country.message as string}
                </Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>

        {/* Email */}
        <FormControl fullWidth>
          <Typography color="#152C5B" sx={{ marginTop: "20px" }}>
            Email Address
          </Typography>
          <FilledInput
            {...register("email", EMAIL_VALIDATION)}
            id="email"
            placeholder="Please type here..."
            disableUnderline
            sx={{
              bgcolor: "#F5F6F8",
              borderRadius: "4px",
              marginTop: "10px",
              "& .MuiInputBase-input": {
                py: "10px",
                "::placeholder": {
                  color: "#b4b4b4ff",
                },
              },
            }}
          />
          {errors.email && (
            <Typography sx={{ color: "red" }}>
              {errors.email.message as string}
            </Typography>
          )}
        </FormControl>

        {/* Role */}
        <FormControl fullWidth>
          <Typography color="#152C5B" sx={{ marginTop: "20px" }}>
            Role
          </Typography>
          <FilledInput
            {...register("role", REQUIRED_VALIDATION("Role"))}
            id="role"
            placeholder="Please type here..."
            disableUnderline
            sx={{
              bgcolor: "#F5F6F8",
              borderRadius: "4px",
              marginTop: "10px",
              "& .MuiInputBase-input": {
                py: "10px",
                "::placeholder": {
                  color: "#b4b4b4ff",
                },
              },
            }}
          />
          {errors.role && (
            <Typography sx={{ color: "red" }}>
              {errors.role.message as string}
            </Typography>
          )}
        </FormControl>

        {/* Password */}
        <FormControl fullWidth>
          <Typography color="#152C5B" sx={{ marginTop: "20px" }}>
            Password
          </Typography>
          <FilledInput
            {...register("password", PASSWORD_VALIDATION)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            id="password"
            placeholder="Please type here..."
            disableUnderline
            sx={{
              bgcolor: "#F5F6F8",
              borderRadius: "4px",
              marginTop: "10px",
              "& .MuiInputBase-input": {
                py: "10px",
                "::placeholder": {
                  color: "#b4b4b4ff",
                },
              },
            }}
          />
          {errors.password && (
            <Typography variant="body1" sx={{ color: "red" }}>
              {errors.password.message as string}
            </Typography>
          )}
        </FormControl>

        {/* Confirm Password */}
        <FormControl fullWidth>
          <Typography color="#152C5B" sx={{ marginTop: "20px" }}>
            Confirm Password
          </Typography>
          <FilledInput
            {...register("confirmPassword", PASSWORD_VALIDATION)}
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showConfirmPassword
                      ? "hide the password"
                      : "display the password"
                  }
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            id="password"
            placeholder="Please type here..."
            disableUnderline
            sx={{
              bgcolor: "#F5F6F8",
              borderRadius: "4px",
              marginTop: "10px",
              "& .MuiInputBase-input": {
                py: "10px",
                "::placeholder": {
                  color: "#b4b4b4ff",
                },
              },
            }}
          />
          {errors.confirmPassword && (
            <Typography variant="body1" sx={{ color: "red" }}>
              {errors.confirmPassword.message as string}
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#3252DF",
            marginTop: "60px",
            marginBottom: "20px",
            padding: "15px",
            textTransform: "capitalize",
            fontSize: "17px",
          }}
        >
          Sign up
          <img
            hidden={!isSubmitting}
            src={loading}
            alt="loading"
            className="loading-icon"
          />
        </Button>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginBottom={"20px"}
        >
          <Grid size={2} textAlign={"center"} sx={{ cursor: "pointer" }}>
            <img src={google} alt="google" width={"50%"} />
          </Grid>
          <Grid size={2} textAlign={"center"} sx={{ cursor: "pointer" }}>
            <img src={facebook} alt="facebook" width={"50%"} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
