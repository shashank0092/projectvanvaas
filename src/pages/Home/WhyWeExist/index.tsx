import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./WhyWeExist.css";

const WhyWeExist = () => {
  const navigate = useNavigate();
  const [showHindi, setShowHindi] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowHindi((prev) => !prev);
        setIsTransitioning(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="why-we-exist">
      {/* Background Illustration - Artisan Hands */}
      <svg
        className="hands-bg-illustration"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c77b30" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Left Hand - Working on Clay */}
        <g
          className="hand-left"
          stroke="url(#lineGradient)"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {/* Palm */}
          <path d="M150 350 Q130 320 140 280 Q150 250 180 240 Q200 235 220 250 Q240 235 260 245 Q280 255 285 280 Q290 310 275 340 Q260 370 230 380 Q200 390 170 375 Q155 365 150 350Z" />
          {/* Fingers */}
          <path d="M180 240 Q175 210 185 180 Q195 160 200 155" />
          <path d="M220 235 Q218 200 225 170 Q232 145 238 140" />
          <path d="M255 245 Q260 215 268 190 Q275 170 280 165" />
          <path d="M280 265 Q295 245 310 235 Q325 228 335 230" />
          {/* Thumb */}
          <path d="M150 320 Q125 315 110 295 Q100 275 105 260" />
          {/* Wrist lines */}
          <path
            d="M160 390 Q180 400 200 398 Q220 396 240 385"
            strokeOpacity="0.5"
          />
          <path
            d="M165 405 Q185 415 205 413 Q225 410 245 400"
            strokeOpacity="0.3"
          />
        </g>

        {/* Right Hand - Holding Thread/Fabric */}
        <g
          className="hand-right"
          stroke="url(#lineGradient)"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {/* Palm */}
          <path d="M550 320 Q570 290 560 250 Q550 220 520 210 Q500 205 480 220 Q460 205 440 215 Q420 225 415 250 Q410 280 425 310 Q440 340 470 350 Q500 360 530 345 Q545 335 550 320Z" />
          {/* Fingers */}
          <path d="M520 210 Q525 180 515 150 Q505 130 500 125" />
          <path d="M480 205 Q482 170 475 140 Q468 115 462 110" />
          <path d="M445 215 Q440 185 432 160 Q425 140 420 135" />
          <path d="M420 235 Q405 215 390 205 Q375 198 365 200" />
          {/* Thumb */}
          <path d="M550 290 Q575 285 590 265 Q600 245 595 230" />
          {/* Thread/Fabric lines */}
          <path
            d="M365 200 Q340 210 320 240 Q300 270 290 310"
            strokeOpacity="0.4"
            strokeDasharray="5,5"
          />
          <path
            d="M335 230 Q280 260 250 320"
            strokeOpacity="0.3"
            strokeDasharray="5,5"
          />
        </g>

        {/* Clay Pot being formed (center) */}
        <g
          className="pottery"
          stroke="url(#lineGradient)"
          fill="none"
          strokeWidth="1.2"
        >
          <ellipse cx="400" cy="480" rx="60" ry="15" strokeOpacity="0.2" />
          <path d="M350 470 Q340 420 355 370 Q370 330 400 320 Q430 330 445 370 Q460 420 450 470" />
          <ellipse cx="400" cy="320" rx="30" ry="10" strokeOpacity="0.6" />
          {/* Decorative lines on pot */}
          <path d="M360 400 Q400 390 440 400" strokeOpacity="0.3" />
          <path d="M355 430 Q400 420 445 430" strokeOpacity="0.3" />
        </g>

        {/* Weaving lines (decorative) */}
        <g
          className="weaving-lines"
          stroke="url(#lineGradient)"
          strokeWidth="0.8"
          strokeOpacity="0.15"
        >
          <path d="M50 100 Q200 120 350 100 Q500 80 650 100 Q750 115 800 100" />
          <path d="M0 150 Q150 170 300 150 Q450 130 600 150 Q700 165 800 150" />
          <path d="M50 500 Q200 520 350 500 Q500 480 650 500 Q750 515 800 500" />
          <path d="M0 550 Q150 570 300 550 Q450 530 600 550 Q700 565 800 550" />
        </g>

        {/* Decorative mandala pattern (subtle) */}
        <g
          className="mandala-bg"
          stroke="url(#lineGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        >
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="40" />
          <circle cx="700" cy="500" r="70" />
          <circle cx="700" cy="500" r="50" />
          <circle cx="700" cy="500" r="30" />
        </g>
      </svg>

      {/* Content */}
      <Box className="why-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="why-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="why-english-title"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "0.75rem", md: "0.85rem" },
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "#c77b30",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Our Purpose
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`why-text-container ${
            isTransitioning ? "transitioning" : ""
          }`}
          sx={{
            maxWidth: "800px",
            width: "100%",
            mb: 4,
            textAlign: "center",
          }}
        >
          {showHindi ? (
            <Box className="text-block">
              <Typography
                className="why-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                यह मंच केवल उत्पादों के लिए नहीं,
              </Typography>
              <Typography
                className="why-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                बल्कि हुनर, आत्मसम्मान और पहचान के लिए बनाया गया है।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="why-animated-text line-1"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                This platform is not just about products,
              </Typography>
              <Typography
                className="why-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                but about talent, self-esteem and identity.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/about-vanvaas")}
          className="why-cta"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 500,
            color: "#fff",
            backgroundColor: "#c77b30",
            textTransform: "none",
            letterSpacing: "0.05em",
            padding: { xs: "12px 28px", md: "14px 36px" },
            borderRadius: "4px",
            boxShadow: "0 4px 15px rgba(199, 123, 48, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#a66628",
              boxShadow: "0 6px 20px rgba(199, 123, 48, 0.4)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Read Our Story →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="why-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyWeExist;
