import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./TrustSection.css";

const TrustSection = () => {
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
    <Box className="trust-section">
      {/* Background Illustration - Trust Emblem */}
      <svg
        className="trust-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="trustGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c77b30" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Central Trust Emblem */}
        <g
          className="trust-emblem"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {/* Outer Shield */}
          <path d="M500 120 L580 160 L580 280 Q580 350 500 400 Q420 350 420 280 L420 160 Z" />
          <path
            d="M500 140 L560 170 L560 270 Q560 330 500 370 Q440 330 440 270 L440 170 Z"
            strokeOpacity="0.6"
          />

          {/* Handshake Symbol Inside */}
          <path d="M470 250 Q460 240 470 230 Q480 225 490 235" />
          <path d="M530 250 Q540 240 530 230 Q520 225 510 235" />
          <path d="M490 235 L510 235" />
          <path
            d="M470 250 L490 270 Q500 280 510 270 L530 250"
            strokeOpacity="0.8"
          />

          {/* Checkmark */}
          <path
            d="M480 300 L495 315 L530 280"
            strokeWidth="2"
            strokeOpacity="0.7"
          />

          {/* Crown/Lotus Top */}
          <path d="M480 120 Q500 100 520 120" strokeOpacity="0.5" />
          <path d="M490 115 Q500 95 510 115" strokeOpacity="0.4" />
        </g>

        {/* Left Side - Scales of Justice */}
        <g
          className="scales-left"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Pillar */}
          <path d="M150 350 L150 200" />
          <path d="M140 350 L160 350" />

          {/* Balance Beam */}
          <path d="M100 200 L200 200" />
          <circle cx="150" cy="200" r="8" />

          {/* Left Pan */}
          <path d="M100 200 L90 230 Q100 240 110 230 L100 200" />
          <path d="M85 235 Q100 250 115 235" strokeOpacity="0.6" />

          {/* Right Pan */}
          <path d="M200 200 L190 230 Q200 240 210 230 L200 200" />
          <path d="M185 235 Q200 250 215 235" strokeOpacity="0.6" />
        </g>

        {/* Right Side - Certificate/Document */}
        <g
          className="certificate-right"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Document */}
          <rect x="800" y="180" width="80" height="100" rx="3" />
          <path d="M815 200 L865 200" strokeOpacity="0.5" />
          <path d="M815 215 L865 215" strokeOpacity="0.5" />
          <path d="M815 230 L850 230" strokeOpacity="0.5" />

          {/* Seal */}
          <circle cx="840" cy="260" r="15" />
          <circle cx="840" cy="260" r="10" strokeOpacity="0.6" />
          <path d="M835 260 L845 260 M840 255 L840 265" strokeOpacity="0.5" />

          {/* Ribbon */}
          <path d="M830 275 L825 300" strokeOpacity="0.6" />
          <path d="M850 275 L855 300" strokeOpacity="0.6" />
        </g>

        {/* Bottom - Handshake */}
        <g
          className="handshake-bottom"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.4"
        >
          {/* Left Hand */}
          <path d="M420 480 Q400 470 410 450 Q420 440 440 445 Q450 440 460 450" />
          <path
            d="M425 450 L420 430 M440 445 L440 420 M455 450 L460 425"
            strokeOpacity="0.3"
          />

          {/* Right Hand */}
          <path d="M580 480 Q600 470 590 450 Q580 440 560 445 Q550 440 540 450" />
          <path
            d="M575 450 L580 430 M560 445 L560 420 M545 450 L540 425"
            strokeOpacity="0.3"
          />

          {/* Clasped Hands */}
          <path d="M460 450 Q480 460 500 455 Q520 460 540 450" />
          <path d="M470 465 Q500 475 530 465" strokeOpacity="0.3" />
        </g>

        {/* Decorative Laurel Wreath */}
        <g
          className="laurel-wreath"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        >
          {/* Left Laurel */}
          <path d="M350 300 Q340 280 350 260" />
          <path d="M350 260 Q340 250 345 235" />
          <path d="M345 235 Q340 220 350 210" />
          <path d="M355 300 Q350 285 355 270" strokeOpacity="0.2" />
          <path d="M355 270 Q350 258 355 245" strokeOpacity="0.2" />

          {/* Right Laurel */}
          <path d="M650 300 Q660 280 650 260" />
          <path d="M650 260 Q660 250 655 235" />
          <path d="M655 235 Q660 220 650 210" />
          <path d="M645 300 Q650 285 645 270" strokeOpacity="0.2" />
          <path d="M645 270 Q650 258 645 245" strokeOpacity="0.2" />
        </g>

        {/* Corner Emblems */}
        <g
          className="corner-emblems"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.2"
        >
          {/* Top Left */}
          <circle cx="80" cy="80" r="30" />
          <circle cx="80" cy="80" r="20" />
          <path d="M70 80 L90 80 M80 70 L80 90" />

          {/* Top Right */}
          <circle cx="920" cy="80" r="30" />
          <circle cx="920" cy="80" r="20" />
          <path d="M910 80 L930 80 M920 70 L920 90" />

          {/* Bottom Left */}
          <circle cx="80" cy="520" r="25" />
          <circle cx="80" cy="520" r="15" />

          {/* Bottom Right */}
          <circle cx="920" cy="520" r="25" />
          <circle cx="920" cy="520" r="15" />
        </g>

        {/* Connecting Lines */}
        <g
          className="connecting-lines"
          stroke="url(#trustGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          strokeDasharray="5,5"
        >
          <path d="M200 250 Q350 200 420 250" />
          <path d="M580 250 Q650 200 800 250" />
        </g>
      </svg>

      {/* Content */}
      <Box className="trust-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="trust-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="trust-english-title"
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
          Trusted & Ethical
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`trust-text-container ${
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
                className="trust-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                कमला ट्रस्ट के सहयोग से,
              </Typography>
              <Typography
                className="trust-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                नैतिक और पारदर्शी पहल।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="trust-animated-text line-1"
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
                In collaboration with Kamala Trust,
              </Typography>
              <Typography
                className="trust-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                Ethical and transparent initiative.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/about-kamala-trust")}
          className="trust-cta"
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
          Our Partners →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="trust-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default TrustSection;
