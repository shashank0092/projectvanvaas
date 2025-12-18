import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FeaturedCreations.css";

const FeaturedCreations = () => {
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
    <Box className="featured-section">
      {/* Background Illustration - Product Silhouettes */}
      <svg
        className="featured-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="featuredGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c77b30" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Vase/Pot Silhouettes - Left */}
        <g
          className="vase-silhouettes"
          stroke="url(#featuredGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Tall Vase */}
          <path d="M80 450 Q60 400 70 350 Q80 300 100 280 Q120 300 130 350 Q140 400 120 450 Z" />
          <ellipse cx="100" cy="280" rx="20" ry="6" />
          <path d="M85 320 Q100 330 115 320" strokeOpacity="0.5" />
          <path d="M75 380 Q100 395 125 380" strokeOpacity="0.5" />

          {/* Round Pot */}
          <path d="M180 480 Q150 450 155 400 Q160 360 200 350 Q240 360 245 400 Q250 450 220 480 Z" />
          <ellipse cx="200" cy="350" rx="30" ry="8" />
          <path d="M165 420 Q200 440 235 420" strokeOpacity="0.4" />
        </g>

        {/* Textile/Fabric Silhouettes - Top */}
        <g
          className="textile-silhouettes"
          stroke="url(#featuredGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Draped Fabric */}
          <path d="M350 80 Q400 60 450 80 Q480 100 500 80 Q550 60 600 80" />
          <path
            d="M360 100 Q410 120 460 100 Q500 80 540 100 Q580 120 620 100"
            strokeOpacity="0.6"
          />
          <path
            d="M370 120 Q420 140 470 120 Q510 100 550 120"
            strokeOpacity="0.4"
          />

          {/* Folded Shawl */}
          <path d="M700 100 L750 100 Q780 110 780 140 L780 180 Q770 200 740 200 L700 200 Q680 190 680 160 L680 120 Q690 100 700 100 Z" />
          <path d="M700 130 L760 130" strokeOpacity="0.5" />
          <path d="M700 160 L760 160" strokeOpacity="0.4" />
        </g>

        {/* Decorative Items - Right */}
        <g
          className="decor-silhouettes"
          stroke="url(#featuredGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Lamp/Diya */}
          <path d="M880 350 Q850 330 860 300 Q880 280 920 280 Q940 300 950 330 Q920 350 880 350 Z" />
          <path d="M900 280 L900 260 Q905 250 910 260 L910 280" />
          <ellipse cx="905" cy="250" rx="8" ry="12" strokeOpacity="0.6" />

          {/* Carved Box */}
          <rect x="840" y="420" width="80" height="50" rx="3" />
          <rect
            x="845"
            y="425"
            width="70"
            height="40"
            rx="2"
            strokeOpacity="0.5"
          />
          <path d="M860 445 L900 445" strokeOpacity="0.4" />
          <circle cx="880" cy="420" r="5" />

          {/* Small Figurine */}
          <path
            d="M920 500 Q910 480 915 460 Q925 450 935 460 Q940 480 930 500 Z"
            strokeOpacity="0.7"
          />
          <circle cx="925" cy="445" r="8" strokeOpacity="0.7" />
        </g>

        {/* Jewelry/Accessories - Bottom */}
        <g
          className="jewelry-silhouettes"
          stroke="url(#featuredGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Necklace */}
          <path d="M400 520 Q450 550 500 520 Q550 550 600 520" />
          <circle cx="500" cy="540" r="10" />
          <circle cx="460" cy="535" r="5" strokeOpacity="0.6" />
          <circle cx="540" cy="535" r="5" strokeOpacity="0.6" />

          {/* Bangles */}
          <circle cx="300" cy="550" r="25" />
          <circle cx="300" cy="550" r="20" strokeOpacity="0.6" />
          <circle cx="340" cy="560" r="22" strokeOpacity="0.8" />
          <circle cx="340" cy="560" r="17" strokeOpacity="0.5" />
        </g>

        {/* Museum Frame Elements */}
        <g
          className="frame-elements"
          stroke="url(#featuredGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        >
          {/* Corner Frames */}
          <path d="M30 30 L30 80 M30 30 L80 30" />
          <path d="M970 30 L970 80 M970 30 L920 30" />
          <path d="M30 570 L30 520 M30 570 L80 570" />
          <path d="M970 570 L970 520 M970 570 L920 570" />

          {/* Subtle Grid Lines */}
          <path d="M0 200 L1000 200" strokeOpacity="0.1" />
          <path d="M0 400 L1000 400" strokeOpacity="0.1" />
          <path d="M333 0 L333 600" strokeOpacity="0.1" />
          <path d="M666 0 L666 600" strokeOpacity="0.1" />
        </g>

        {/* Decorative Mandalas */}
        <g
          className="mandala-elements"
          stroke="url(#featuredGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        >
          <circle cx="150" cy="150" r="40" />
          <circle cx="150" cy="150" r="30" />
          <circle cx="150" cy="150" r="20" />
          <circle cx="850" cy="480" r="35" />
          <circle cx="850" cy="480" r="25" />
          <circle cx="850" cy="480" r="15" />
        </g>
      </svg>

      {/* Content */}
      <Box className="featured-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="featured-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="featured-english-title"
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
          Featured Creations
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`featured-text-container ${
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
                className="featured-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                चुनी हुई कृतियाँ,
              </Typography>
              <Typography
                className="featured-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                जिनमें समर्पण और गुणवत्ता झलकती है।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="featured-animated-text line-1"
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
                Selected works that reflect
              </Typography>
              <Typography
                className="featured-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#8b5a2b",
                }}
              >
                dedication and quality.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/shop")}
          className="featured-cta"
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
          See All Products →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="featured-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedCreations;
