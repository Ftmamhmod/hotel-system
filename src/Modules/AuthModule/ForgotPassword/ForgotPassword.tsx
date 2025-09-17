import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import type { IForgotPasswordTypes } from "../../../Services/INTERFACES";
import { EMAIL_VALIDATION } from "../../../Services/VALIDATIONS";
import { axiosInstance, USERS_URLS } from "../../../Services/END_POINTS";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";
import loading from "../../../Images/loading.gif";
export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPasswordTypes>();

  const onSubmit = async (data: IForgotPasswordTypes) => {
    try {
      const response = await axiosInstance.post(
        USERS_URLS.FORGOT_PASSWORD,
        data
      );

      toast.success(
        response?.data?.message ||
          `Check your email for password reset instructions.`
      );
      navigate("/reset-password", { state: { email: data.email } });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <Container>
      <title>Staycation | Forgot Password</title>

      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "600" }}>
          Forgot password
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginY: "30px" }}>
          If you already have an account register
          <Typography>
            You can{" "}
            <Link
              href="/login"
              underline="none"
              sx={{ color: "#eb5148", fontWeight: "bold" }}
            >
              Login here !
            </Link>
          </Typography>
        </Typography>
      </Box>
      <Box onSubmit={handleSubmit(onSubmit)} component="form">
        <FormControl fullWidth>
          <Typography color="#152C5B">Email Address</Typography>
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
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#3252DF",
            marginTop: "100px",
            padding: "15px",
            textTransform: "capitalize",
            fontSize: "17px",
          }}
        >
          send mail{" "}
          <img
            hidden={!isSubmitting}
            src={loading}
            alt="loading"
            className="loading-icon"
          />
        </Button>
      </Box>
    </Container>
  );
}
