import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import "./SplashScreen.css";

interface SplashScreenProps {
  onComplete?: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleProceed = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate("/login");
      }
    }, 500);
  };

  return (
    <Box
      className={`splash-screen royal-bg ${!isVisible ? "fade-out" : ""}`}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#F5EFE3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
        padding: { xs: "20px", sm: "30px", md: "40px" },
      }}
    >
      <Box className="bg-art" />
      <Box className="bg-illus bg-illus--tl" />
      <Box className="bg-illus bg-illus--br" />
      <Box className="bg-illus bg-illus--tc" />
      <Box className="bg-illus bg-illus--lc" />
      <Box className="bg-illus bg-illus--tr2" />
      <Box className="bg-illus bg-illus--cl" />
      <Box className="bg-illus bg-illus--ll" />
      <Box className="bg-illus bg-illus--near" />
      <Box className="bg-illus bg-illus--near2" />
      <Box className="bg-illus bg-illus--hand" />
      <Box className="bg-illus bg-illus--tools" />
      <Box className="bg-illus bg-illus--mini1" />
      <Box className="bg-illus bg-illus--mini2" />
      <Box className="bg-heritage bg-heritage--mandala" />
      <Box className="bg-heritage bg-heritage--paisley" />

      <Box
        className="lotus-container lotus-bounce"
        sx={{
          position: "relative",
          width: { xs: "320px", sm: "400px", md: "480px" },
          height: { xs: "260px", sm: "320px", md: "380px" },
          mb: { xs: 3, sm: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        {/* Pink Glow Effect Layers */}
        <Box
          className="lotus-glow"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,182,193,0.4) 0%, rgba(255,182,193,0.2) 40%, transparent 70%)",
            filter: "blur(25px)",
            zIndex: 0,
            animation: "glowPulse 3s ease-in-out infinite",
          }}
        />
        <Box
          className="lotus-glow"
          sx={{
            position: "absolute",
            width: "120%",
            height: "120%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,182,193,0.25) 0%, rgba(255,182,193,0.15) 50%, transparent 80%)",
            filter: "blur(35px)",
            zIndex: 0,
            animation: "glowPulse 4s ease-in-out infinite 0.5s",
          }}
        />
        <Box
          className="lotus-glow"
          sx={{
            position: "absolute",
            width: "140%",
            height: "140%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,182,193,0.15) 0%, transparent 60%)",
            filter: "blur(45px)",
            zIndex: 0,
            animation: "glowPulse 5s ease-in-out infinite 1s",
          }}
        />

        <svg
          viewBox="0 0 300 200"
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
            position: "relative",
            zIndex: 1,
          }}
        >
          <g transform="translate(150, 150) scale(1.2)">
            {/* Center Petal */}
            <path
              className="lotus-path"
              d="M 0,-10 C -15,-30 -15,-60 0,-90 C 15,-60 15,-30 0,-10"
            />

            {/* Inner Left Petal */}
            <path
              className="lotus-path"
              d="M -10,-5 C -35,-25 -45,-55 -30,-80 C -25,-60 -10,-35 -5,-15"
            />
            {/* Inner Right Petal */}
            <path
              className="lotus-path"
              d="M 10,-5 C 35,-25 45,-55 30,-80 C 25,-60 10,-35 5,-15"
            />

            {/* Middle Left Petal */}
            <path
              className="lotus-path"
              d="M -20,0 C -50,-10 -70,-40 -60,-70 C -60,-50 -40,-20 -15,-5"
            />
            {/* Middle Right Petal */}
            <path
              className="lotus-path"
              d="M 20,0 C 50,-10 70,-40 60,-70 C 60,-50 40,-20 15,-5"
            />

            {/* Outer Left Bottom Petal */}
            <path
              className="lotus-path"
              d="M -25,5 C -60,5 -85,-15 -80,-40 C -75,-25 -50,10 -10,0"
            />
            {/* Outer Right Bottom Petal */}
            <path
              className="lotus-path"
              d="M 25,5 C 60,5 85,-15 80,-40 C 75,-25 50,10 10,0"
            />

            {/* Base curve */}
            <path className="lotus-path" d="M -25,5 Q 0,15 25,5" />
          </g>
        </svg>
      </Box>

      {/* Title and CTA */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2.2,
          position: "relative",
          zIndex: 3,
        }}
      >
        <Typography
          className="project-title"
          sx={{
            fontFamily:
              '"Playfair Display", "Cormorant Garamond", "Times New Roman", serif',
            fontSize: { xs: "38px", sm: "50px", md: "62px" },
            letterSpacing: { xs: "3.2px", sm: "4.2px", md: "5.2px" },
            fontWeight: 600,
            background:
              "linear-gradient(135deg, #8B4513 0%, #B8860B 30%, #DAA520 60%, #FFD700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow:
              "0 3px 12px rgba(218, 165, 32, 0.25), 0 1px 3px rgba(139, 69, 19, 0.2)",
            textTransform: "uppercase",
            fontStyle: "normal",
            lineHeight: 1.2,
            position: "relative",
            textAlign: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #DAA520, transparent)",
              opacity: 0.6,
            },
          }}
        >
          Project Vanvaas
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            lineHeight: 1.35,
            mt: { xs: 1, sm: 1.2 },
            mb: { xs: 1, sm: 1.2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Poppins", "Arial", sans-serif',
              fontSize: { xs: "16px", sm: "17px", md: "18px" },
              letterSpacing: { xs: "1.4px", sm: "1.6px" },
              color: "#5c4a3b",
              fontWeight: 600,
              textTransform: "uppercase",
              opacity: 0.95,
              mb: { xs: "2px", sm: "4px" },
            }}
          >
            An Initiative by
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Arial", sans-serif',
              fontSize: { xs: "16px", sm: "17px", md: "18px" },
              letterSpacing: { xs: "1.8px", sm: "2px" },
              color: "#4b3a2d",
              fontWeight: 700,
              textTransform: "uppercase",
              opacity: 0.95,
            }}
          >
            KAMALA ANKIBAI GHAMANDIRAM GOWANI TRUST
          </Typography>
        </Box>

        <Box className="royal-separator" />

        <Button
          variant="contained"
          onClick={handleProceed}
          sx={{
            textTransform: "none",
            backgroundColor: "#DB7093",
            display: "inline-flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.2 },
            "&:hover": {
              backgroundColor: "#c75f84",
              transform: "translateY(-2px) scale(1.03)",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.2), 0 0 20px rgba(219,112,147,0.35)",
            },
            "&:active": {
              transform: "translateY(0px) scale(0.99)",
            },
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            padding: { xs: "12px 28px", sm: "13px 32px" },
            borderRadius: "30px",
            boxShadow:
              "0 6px 16px rgba(0,0,0,0.16), 0 0 12px rgba(219,112,147,0.25)",
            letterSpacing: { xs: "0.08em", sm: "0.1em" },
            fontWeight: 700,
            transition: "all 0.25s ease",
          }}
        >
          <FaCrown style={{ fontSize: "1rem" }} />
          Take me
        </Button>
      </Box>
    </Box>
  );
};

export default SplashScreen;
