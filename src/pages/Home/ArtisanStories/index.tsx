import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ArtisanStories.css";

const ArtisanStories = () => {
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
    <Box className="artisan-stories">
      {/* Background Illustration - Rural Tools & Craft Patterns */}
      <svg
        className="artisan-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5a2b" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#c77b30" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Spinning Wheel (Charkha) - Left */}
        <g
          className="charkha"
          stroke="url(#toolGradient)"
          fill="none"
          strokeWidth="1.2"
        >
          <circle cx="120" cy="300" r="70" />
          <circle cx="120" cy="300" r="50" />
          <circle cx="120" cy="300" r="30" />
          <circle cx="120" cy="300" r="10" fill="url(#toolGradient)" />
          <line x1="120" y1="230" x2="120" y2="370" />
          <line x1="50" y1="300" x2="190" y2="300" />
          <line x1="70" y1="250" x2="170" y2="350" />
          <line x1="70" y1="350" x2="170" y2="250" />
          {/* Stand */}
          <path d="M120 370 L100 450 M120 370 L140 450" strokeWidth="2" />
          <line x1="90" y1="450" x2="150" y2="450" strokeWidth="2" />
        </g>

        {/* Loom Pattern - Top */}
        <g
          className="loom-pattern"
          stroke="url(#toolGradient)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
        >
          <path d="M300 50 L300 150 M330 50 L330 150 M360 50 L360 150 M390 50 L390 150 M420 50 L420 150" />
          <path d="M280 70 L440 70 M280 90 L440 90 M280 110 L440 110 M280 130 L440 130" />
        </g>

        {/* Pottery Tools - Right */}
        <g
          className="pottery-tools"
          stroke="url(#toolGradient)"
          fill="none"
          strokeWidth="1"
        >
          {/* Potter's Wheel */}
          <ellipse cx="880" cy="400" rx="60" ry="15" />
          <ellipse cx="880" cy="390" rx="50" ry="12" />
          <path d="M830 400 L830 450 M930 400 L930 450" strokeWidth="1.5" />
          <ellipse cx="880" cy="450" rx="50" ry="10" />
          {/* Pot being formed */}
          <path d="M860 350 Q855 370 860 390 M900 350 Q905 370 900 390" />
          <ellipse cx="880" cy="350" rx="20" ry="8" />
        </g>

        {/* Weaving Shuttle - Center Bottom */}
        <g
          className="shuttle"
          stroke="url(#toolGradient)"
          fill="none"
          strokeWidth="1"
        >
          <path d="M450 500 Q480 480 550 480 Q620 480 650 500 Q620 520 550 520 Q480 520 450 500Z" />
          <line x1="480" y1="500" x2="620" y2="500" strokeDasharray="3,3" />
        </g>

        {/* Traditional Patterns - Corners */}
        <g
          className="corner-pattern"
          stroke="url(#toolGradient)"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        >
          {/* Top Right Corner */}
          <path d="M900 30 Q920 50 900 70 Q880 50 900 30" />
          <path d="M930 60 Q950 80 930 100 Q910 80 930 60" />
          <path d="M960 30 Q980 50 960 70 Q940 50 960 30" />

          {/* Bottom Left Corner */}
          <path d="M40 530 Q60 550 40 570 Q20 550 40 530" />
          <path d="M70 560 Q90 580 70 600 Q50 580 70 560" />
        </g>

        {/* Hammer & Chisel - Wood Carving */}
        <g
          className="carving-tools"
          stroke="url(#toolGradient)"
          fill="none"
          strokeWidth="1.2"
        >
          <rect x="700" y="100" width="8" height="60" rx="2" />
          <path
            d="M695 100 L712 100 L710 90 L698 90 Z"
            fill="url(#toolGradient)"
          />
          <rect x="730" y="120" width="50" height="12" rx="3" />
          <path d="M780 120 L800 126 L780 132" />
        </g>

        {/* Needle & Thread Pattern */}
        <g
          className="needle-thread"
          stroke="url(#toolGradient)"
          strokeWidth="0.8"
        >
          <line x1="200" y1="480" x2="250" y2="450" />
          <path
            d="M250 450 Q280 470 260 500 Q290 480 270 520"
            strokeDasharray="2,4"
          />
        </g>

        {/* Decorative Border Lines */}
        <g
          className="border-lines"
          stroke="url(#toolGradient)"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        >
          <path d="M0 100 Q250 80 500 100 Q750 120 1000 100" />
          <path d="M0 500 Q250 520 500 500 Q750 480 1000 500" />
        </g>
      </svg>

      {/* Content */}
      <Box className="artisan-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="artisan-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="artisan-english-title"
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
          Meet the Makers
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`artisan-text-container ${
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
                className="artisan-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                हर कृति के पीछे एक जीवन,
              </Typography>
              <Typography
                className="artisan-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                एक संघर्ष और एक कहानी छिपी है।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="artisan-animated-text line-1"
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
                Behind every creation lies a life,
              </Typography>
              <Typography
                className="artisan-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                a struggle, and a story.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/meet-our-artists")}
          className="artisan-cta"
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
          Meet Our Artisans →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="artisan-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtisanStories;
