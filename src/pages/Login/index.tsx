// @ts-nocheck
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { loginSuccess, setLoading } from "../../store/slices/authSlice";
import "swiper/css";
import "swiper/css/effect-fade";
import Art1 from "../../assets/LoginPage/ArtImage1.jpg";
import Art2 from "../../assets/LoginPage/ArtImage2.jpg";
import Art3 from "../../assets/LoginPage/ArtImage3.jpg";

const slides = [
  {
    image: Art1,
    title: "Handcrafted Futures, Royal Stories",
    text: "विशेष ज़रूरतों वाले कलाकारों के हाथों से बनी हर रचना सिर्फ़ एक प्रोडक्ट नहीं, एक नयी कहानी और नया भविष्य है।",
  },
  {
    image: Art2,
    title: "From Artisan Hands to Your Home",
    text: "किसान, कारीगर और दिव्यांग कलाकारों की मेहनत से बनी ये कलाकृतियाँ सीधे आपके घर तक पहुँचती हैं – बिना किसी बीच वाले के, भरोसे के साथ।",
  },
  {
    image: Art3,
    title: "Where Heritage Meets Hope",
    text: "पुरानी भारतीय विरासत, लोक‑कला और प्रकृति से जुड़ी डिज़ाइनों को हम आज के दौर की ऑनलाइन बाज़ार से जोड़कर हर कलाकार को सम्मान और रोज़गार दिलाना चाहते हैं।",
  },
];

const Login = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentSlide = slides[activeIndex];

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      dispatch(setLoading(true));
      try {
        // Fetch user info from Google
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        const userInfo = await userInfoResponse.json();

        console.log("User logged in:", userInfo);

        // Dispatch Redux action to store user info
        dispatch(
          loginSuccess({
            user: userInfo,
            accessToken: tokenResponse.access_token,
          })
        );

        // Navigate to home page after successful login
        navigate("/home");
      } catch (error) {
        console.error("Error fetching user info:", error);
        alert("Login failed. Please try again.");
      } finally {
        setIsLoading(false);
        dispatch(setLoading(false));
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      alert("Login failed. Please try again.");
      setIsLoading(false);
      dispatch(setLoading(false));
    },
  });

  const handleGoogleLogin = () => {
    login();
  };

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
              "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(10,20,30,0.6) 40%, rgba(15,31,46,0.7) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1200}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Box
                sx={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Text and Button - Above Background */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          maxWidth: { xs: "95%", sm: "85%", md: "75%", lg: "70%" },
          width: "100%",
          px: { xs: 2, sm: 3, md: 4 },
          textAlign: "center",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 4, md: 5 },
          pointerEvents: "auto",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
              fontSize: {
                xs: "32px",
                sm: "40px",
                md: "48px",
                lg: "56px",
              },
              fontWeight: 700,
              mb: { xs: 2.5, sm: 3 },
              letterSpacing: { xs: "2px", sm: "3px", md: "4px" },
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #D4AF37 30%, #C9A961 60%, #B8860B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 6px rgba(184, 134, 11, 0.3))",
              textShadow:
                "0 3px 15px rgba(184, 134, 11, 0.4), 0 0 20px rgba(212, 175, 55, 0.25)",
            }}
          >
            {currentSlide.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Arial", sans-serif',
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "19px",
                lg: "21px",
              },
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              color: "#FFFFFF",
              maxWidth: "900px",
              mx: "auto",
              fontWeight: 500,
              textShadow:
                "0 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)",
            }}
          >
            {currentSlide.text}
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<FcGoogle style={{ fontSize: "26px" }} />}
          onClick={handleGoogleLogin}
          disabled={isLoading}
          sx={{
            minWidth: { xs: "300px", sm: "340px", md: "380px" },
            py: { xs: 1.4, sm: 1.6, md: 1.8 },
            px: { xs: 4, sm: 5 },
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            fontWeight: 700,
            letterSpacing: { xs: "0.06em", sm: "0.1em" },
            textTransform: "none",
            borderRadius: "32px",
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 50%, #F0F0F0 100%)",
            color: "#000000",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.4), 0 0 25px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
            border: "2px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            zIndex: 11,
            pointerEvents: "auto",
            cursor: "pointer",
            "&:hover": {
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 50%, #F5F5F5 100%)",
              transform: "translateY(-4px) scale(1.03)",
              boxShadow:
                "0 14px 40px rgba(0,0,0,0.5), 0 0 35px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
              border: "2px solid rgba(255,255,255,0.7)",
            },
            "&:active": {
              transform: "translateY(-2px) scale(0.99)",
            },
          }}
        >
          {isLoading ? "Logging in..." : "Login with Google"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
