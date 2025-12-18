import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HowItWorks.css";

const HowItWorks = () => {
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
    <Box className="howitworks-section">
      {/* Background Illustration - Step-based Process */}
      <svg
        className="howitworks-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="processGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c77b30" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Step 1 - Tools/Creation */}
        <g
          className="step-tools"
          stroke="url(#processGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Brush */}
          <path d="M120 200 L120 280" />
          <path d="M110 200 Q120 180 130 200" />
          <rect x="115" y="280" width="10" height="40" rx="2" />

          {/* Needle & Thread */}
          <path d="M180 220 L180 300" strokeWidth="1" />
          <ellipse cx="180" cy="215" rx="5" ry="8" />
          <path
            d="M180 300 Q200 320 180 340 Q160 360 180 380"
            strokeDasharray="4,3"
            strokeOpacity="0.6"
          />

          {/* Chisel */}
          <path d="M80 250 L80 320 L90 330 L100 320 L100 250 Z" />
          <rect x="82" y="230" width="16" height="20" />

          {/* Step Number */}
          <circle cx="140" cy="150" r="20" strokeOpacity="0.4" />
          <text
            x="140"
            y="156"
            textAnchor="middle"
            fontSize="14"
            fill="#c77b30"
            opacity="0.5"
          >
            1
          </text>
        </g>

        {/* Step 2 - Hands Working */}
        <g
          className="step-hands"
          stroke="url(#processGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Left Hand */}
          <path d="M420 280 Q400 260 410 230 Q425 210 450 220 Q470 210 485 230 Q495 260 480 280 Q460 300 440 295 Q420 300 420 280 Z" />
          <path d="M430 230 L425 200" strokeOpacity="0.7" />
          <path d="M450 220 L450 185" strokeOpacity="0.7" />
          <path d="M470 230 L475 200" strokeOpacity="0.7" />

          {/* Right Hand */}
          <path
            d="M520 280 Q540 260 530 230 Q515 210 490 220"
            strokeOpacity="0.6"
            strokeDasharray="5,3"
          />

          {/* Working on Item */}
          <ellipse cx="470" cy="320" rx="30" ry="15" strokeOpacity="0.5" />
          <path d="M450 320 Q470 340 490 320" strokeOpacity="0.4" />

          {/* Step Number */}
          <circle cx="470" cy="150" r="20" strokeOpacity="0.4" />
          <text
            x="470"
            y="156"
            textAnchor="middle"
            fontSize="14"
            fill="#c77b30"
            opacity="0.5"
          >
            2
          </text>
        </g>

        {/* Step 3 - Product/Result */}
        <g
          className="step-product"
          stroke="url(#processGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Gift Box / Product */}
          <rect x="780" y="220" width="80" height="60" rx="3" />
          <path d="M780 250 L860 250" />
          <path d="M820 220 L820 280" />
          {/* Ribbon */}
          <path d="M810 220 Q820 200 830 220" />
          <path d="M805 195 Q820 210 835 195" strokeOpacity="0.7" />

          {/* Sparkle/Quality */}
          <path
            d="M870 210 L875 200 L880 210 L890 215 L880 220 L875 230 L870 220 L860 215 Z"
            strokeOpacity="0.5"
          />
          <path
            d="M770 200 L773 195 L776 200 L781 202 L776 204 L773 209 L770 204 L765 202 Z"
            strokeOpacity="0.4"
          />

          {/* Step Number */}
          <circle cx="820" cy="150" r="20" strokeOpacity="0.4" />
          <text
            x="820"
            y="156"
            textAnchor="middle"
            fontSize="14"
            fill="#c77b30"
            opacity="0.5"
          >
            3
          </text>
        </g>

        {/* Connecting Flow Lines */}
        <g
          className="flow-lines"
          stroke="url(#processGradient)"
          fill="none"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="8,4"
        >
          <path d="M200 200 Q300 180 400 200" />
          <path d="M540 200 Q650 180 750 200" />
          {/* Arrows */}
          <path
            d="M395 198 L405 200 L395 202"
            strokeDasharray="none"
            strokeOpacity="0.4"
          />
          <path
            d="M745 198 L755 200 L745 202"
            strokeDasharray="none"
            strokeOpacity="0.4"
          />
        </g>

        {/* Bottom Decorative Elements */}
        <g
          className="bottom-decor"
          stroke="url(#processGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        >
          {/* Wavy Line */}
          <path d="M100 450 Q200 430 300 450 Q400 470 500 450 Q600 430 700 450 Q800 470 900 450" />
          <path
            d="M100 470 Q200 450 300 470 Q400 490 500 470 Q600 450 700 470 Q800 490 900 470"
            strokeOpacity="0.15"
          />
        </g>

        {/* Corner Elements */}
        <g
          className="corner-elements"
          stroke="url(#processGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.2"
        >
          <path d="M30 30 L30 70 M30 30 L70 30" />
          <path d="M970 30 L970 70 M970 30 L930 30" />
          <path d="M30 570 L30 530 M30 570 L70 570" />
          <path d="M970 570 L970 530 M970 570 L930 570" />
        </g>
      </svg>

      {/* Content */}
      <Box className="howitworks-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="howitworks-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="howitworks-english-title"
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
          How It Works
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`howitworks-text-container ${
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
                className="howitworks-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                सरल प्रक्रिया, पारदर्शी सहयोग
              </Typography>
              <Typography
                className="howitworks-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                और सम्मानजनक व्यापार।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="howitworks-animated-text line-1"
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
                Simple processes, transparent collaboration
              </Typography>
              <Typography
                className="howitworks-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                and respectful trading.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/about-vanvaas")}
          className="howitworks-cta"
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
          Understand Process →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="howitworks-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
