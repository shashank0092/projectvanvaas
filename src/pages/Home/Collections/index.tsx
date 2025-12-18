import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Collections.css";

const Collections = () => {
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
    <Box className="collections-section">
      {/* Background Illustration - Craft Patterns */}
      <svg
        className="collections-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="craftGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c77b30" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Textile Pattern - Left Side */}
        <g
          className="textile-pattern"
          stroke="url(#craftGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Weave Pattern */}
          <path d="M50 100 L50 200 M70 100 L70 200 M90 100 L90 200 M110 100 L110 200" />
          <path d="M40 120 L120 120 M40 140 L120 140 M40 160 L120 160 M40 180 L120 180" />
          {/* Bobbin/Spool */}
          <ellipse cx="80" cy="280" rx="25" ry="8" />
          <path d="M55 280 L55 320 M105 280 L105 320" />
          <ellipse cx="80" cy="320" rx="25" ry="8" />
          <path
            d="M60 290 Q80 300 100 290 M60 310 Q80 300 100 310"
            strokeOpacity="0.5"
          />
          {/* Fabric Fold */}
          <path d="M30 380 Q60 360 90 380 Q120 400 150 380" />
          <path
            d="M35 400 Q65 380 95 400 Q125 420 155 400"
            strokeOpacity="0.6"
          />
          <path
            d="M40 420 Q70 400 100 420 Q130 440 160 420"
            strokeOpacity="0.4"
          />
        </g>

        {/* Pottery Pattern - Center */}
        <g
          className="pottery-pattern"
          stroke="url(#craftGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Pot Shape */}
          <path d="M480 450 Q450 400 460 350 Q470 300 500 280 Q530 300 540 350 Q550 400 520 450 Z" />
          <ellipse cx="500" cy="280" rx="25" ry="8" />
          <path d="M470 320 Q500 330 530 320" strokeOpacity="0.5" />
          <path d="M465 360 Q500 375 535 360" strokeOpacity="0.5" />
          <path d="M460 400 Q500 420 540 400" strokeOpacity="0.5" />
          {/* Potter's Wheel */}
          <ellipse cx="500" cy="480" rx="50" ry="12" />
          <ellipse cx="500" cy="490" rx="40" ry="8" strokeOpacity="0.6" />
          {/* Small Pots */}
          <path
            d="M380 500 Q370 480 380 460 Q400 460 400 480 Q390 500 380 500"
            strokeOpacity="0.5"
          />
          <path
            d="M620 490 Q610 470 620 450 Q640 450 640 470 Q630 490 620 490"
            strokeOpacity="0.5"
          />
        </g>

        {/* Woodwork Pattern - Right Side */}
        <g
          className="woodwork-pattern"
          stroke="url(#craftGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Carved Wood Panel */}
          <rect x="850" y="100" width="100" height="150" rx="5" />
          <path d="M870 120 Q900 140 930 120" />
          <path d="M870 150 Q900 130 930 150" />
          <circle cx="900" cy="175" r="15" />
          <circle cx="900" cy="175" r="8" strokeOpacity="0.6" />
          <path d="M870 210 Q900 230 930 210" />
          {/* Chisel */}
          <path
            d="M880 300 L880 360 L890 370 L900 360 L900 300 Z"
            strokeOpacity="0.7"
          />
          <rect x="882" y="280" width="16" height="20" strokeOpacity="0.7" />
          {/* Wood Grain Lines */}
          <path
            d="M820 400 Q850 410 880 400 Q910 390 940 400"
            strokeOpacity="0.4"
          />
          <path
            d="M820 420 Q850 430 880 420 Q910 410 940 420"
            strokeOpacity="0.3"
          />
          <path
            d="M820 440 Q850 450 880 440 Q910 430 940 440"
            strokeOpacity="0.25"
          />
        </g>

        {/* Decorative Corner Patterns */}
        <g
          className="corner-decor"
          stroke="url(#craftGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        >
          {/* Top Left Corner */}
          <path d="M0 50 Q30 30 60 50 Q90 70 120 50" />
          <path d="M20 0 Q40 30 20 60" />
          {/* Top Right Corner */}
          <path d="M880 50 Q910 30 940 50 Q970 70 1000 50" />
          <path d="M980 0 Q960 30 980 60" />
          {/* Bottom Left Corner */}
          <path d="M0 550 Q30 570 60 550 Q90 530 120 550" />
          {/* Bottom Right Corner */}
          <path d="M880 550 Q910 570 940 550 Q970 530 1000 550" />
        </g>

        {/* Subtle Mandala Pattern - Background */}
        <g
          className="mandala-pattern"
          stroke="url(#craftGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        >
          <circle cx="200" cy="500" r="60" />
          <circle cx="200" cy="500" r="45" />
          <circle cx="200" cy="500" r="30" />
          <circle cx="800" cy="100" r="50" />
          <circle cx="800" cy="100" r="35" />
          <circle cx="800" cy="100" r="20" />
        </g>
      </svg>

      {/* Content */}
      <Box className="collections-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="collections-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="collections-english-title"
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
          Explore Collections
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`collections-text-container ${
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
                className="collections-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                हस्तशिल्प की विभिन्न परंपराओं से सजी
              </Typography>
              <Typography
                className="collections-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                अनूठी श्रेणियाँ।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="collections-animated-text line-1"
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
                Unique ranges adorned with
              </Typography>
              <Typography
                className="collections-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                various handicraft traditions.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/categories")}
          className="collections-cta"
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
          See All Categories →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="collections-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default Collections;
