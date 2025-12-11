// @ts-nocheck
import { Box, Typography, Button, TextField, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Art1 from "../../assets/LoginPage/ArtImage1.jpg";
import Art2 from "../../assets/LoginPage/ArtImage2.jpg";
import Art3 from "../../assets/LoginPage/ArtImage3.jpg";
import Art4 from "../../assets/LoginPage/ArtImage4.jpg";

const slides = [Art1, Art2, Art3, Art4];

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0f1f2e",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          "& .swiper": { height: "100%" },
          "& .swiper-slide": {
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(10,20,30,0.55) 40%, rgba(15,31,46,0.65) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1200}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Box
                sx={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: `url(${src})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Paper
        elevation={8}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 420,
          width: "90%",
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 2, letterSpacing: "0.04em" }}
        >
          Welcome Back
        </Typography>
        <Typography sx={{ mb: 3, color: "rgba(255,255,255,0.8)" }}>
          Sign in to continue your journey.
        </Typography>
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          sx={{
            mb: 2,
            input: { color: "#fff" },
            label: { color: "rgba(255,255,255,0.7)" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
              "&:hover fieldset": { borderColor: "#fff" },
            },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            mb: 3,
            input: { color: "#fff" },
            label: { color: "rgba(255,255,255,0.7)" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
              "&:hover fieldset": { borderColor: "#fff" },
            },
          }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.2,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background:
              "linear-gradient(135deg, #dba565 0%, #c87f5e 50%, #db7093 100%)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            "&:hover": {
              background:
                "linear-gradient(135deg, #e0b87a 0%, #d48e70 50%, #e284a6 100%)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Take me in
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
