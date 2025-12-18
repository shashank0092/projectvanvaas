import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./OurImpact.css";

const OurImpact = () => {
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
    <Box className="impact-section">
      {/* Background Illustration - Interconnected Hands/Community */}
      <svg
        className="impact-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="impactGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#5a7247" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3d5a2e" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Central Connected Hands Circle */}
        <g
          className="hands-circle"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {/* Hand 1 - Top */}
          <path d="M480 180 Q470 160 475 140 Q485 125 500 130 Q515 125 525 140 Q530 160 520 180" />
          <path
            d="M485 140 L485 115 M500 130 L500 100 M515 140 L515 115"
            strokeOpacity="0.7"
          />

          {/* Hand 2 - Right */}
          <path d="M580 280 Q600 270 620 275 Q635 285 630 300 Q635 315 620 325 Q600 330 580 320" />
          <path
            d="M620 275 L645 270 M630 300 L660 300 M620 325 L645 330"
            strokeOpacity="0.7"
          />

          {/* Hand 3 - Bottom */}
          <path d="M520 420 Q530 440 525 460 Q515 475 500 470 Q485 475 475 460 Q470 440 480 420" />
          <path
            d="M515 460 L515 485 M500 470 L500 500 M485 460 L485 485"
            strokeOpacity="0.7"
          />

          {/* Hand 4 - Left */}
          <path d="M420 320 Q400 330 380 325 Q365 315 370 300 Q365 285 380 275 Q400 270 420 280" />
          <path
            d="M380 275 L355 270 M370 300 L340 300 M380 325 L355 330"
            strokeOpacity="0.7"
          />

          {/* Connecting Circle */}
          <circle
            cx="500"
            cy="300"
            r="100"
            strokeOpacity="0.3"
            strokeDasharray="8,4"
          />
          <circle
            cx="500"
            cy="300"
            r="120"
            strokeOpacity="0.15"
            strokeDasharray="4,8"
          />
        </g>

        {/* Community Figures - Left Side */}
        <g
          className="community-left"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Person 1 */}
          <circle cx="120" cy="200" r="15" />
          <path d="M120 215 L120 260 M100 235 L140 235 M120 260 L105 300 M120 260 L135 300" />

          {/* Person 2 */}
          <circle cx="180" cy="220" r="12" />
          <path
            d="M180 232 L180 270 M165 248 L195 248 M180 270 L168 305 M180 270 L192 305"
            strokeOpacity="0.8"
          />

          {/* Person 3 */}
          <circle cx="80" cy="280" r="13" />
          <path
            d="M80 293 L80 335 M65 310 L95 310 M80 335 L68 375 M80 335 L92 375"
            strokeOpacity="0.7"
          />

          {/* Helping Hand Connection */}
          <path
            d="M140 235 Q160 240 165 248"
            strokeOpacity="0.5"
            strokeDasharray="3,3"
          />
          <path
            d="M95 310 Q110 315 120 320"
            strokeOpacity="0.5"
            strokeDasharray="3,3"
          />
        </g>

        {/* Community Figures - Right Side */}
        <g
          className="community-right"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Person 4 */}
          <circle cx="880" cy="200" r="15" />
          <path d="M880 215 L880 260 M860 235 L900 235 M880 260 L865 300 M880 260 L895 300" />

          {/* Person 5 */}
          <circle cx="820" cy="220" r="12" />
          <path
            d="M820 232 L820 270 M805 248 L835 248 M820 270 L808 305 M820 270 L832 305"
            strokeOpacity="0.8"
          />

          {/* Person 6 */}
          <circle cx="920" cy="280" r="13" />
          <path
            d="M920 293 L920 335 M905 310 L935 310 M920 335 L908 375 M920 335 L932 375"
            strokeOpacity="0.7"
          />

          {/* Helping Hand Connection */}
          <path
            d="M860 235 Q840 240 835 248"
            strokeOpacity="0.5"
            strokeDasharray="3,3"
          />
          <path
            d="M905 310 Q890 315 880 320"
            strokeOpacity="0.5"
            strokeDasharray="3,3"
          />
        </g>

        {/* Heart/Care Symbols */}
        <g
          className="care-symbols"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Heart 1 */}
          <path
            d="M500 300 Q490 290 490 280 Q490 270 500 275 Q510 270 510 280 Q510 290 500 300 Z"
            strokeOpacity="0.6"
          />

          {/* Small Hearts */}
          <path
            d="M300 150 Q295 145 295 140 Q295 135 300 138 Q305 135 305 140 Q305 145 300 150 Z"
            strokeOpacity="0.4"
          />
          <path
            d="M700 450 Q695 445 695 440 Q695 435 700 438 Q705 435 705 440 Q705 445 700 450 Z"
            strokeOpacity="0.4"
          />
          <path
            d="M200 480 Q195 475 195 470 Q195 465 200 468 Q205 465 205 470 Q205 475 200 480 Z"
            strokeOpacity="0.3"
          />
          <path
            d="M800 120 Q795 115 795 110 Q795 105 800 108 Q805 105 805 110 Q805 115 800 120 Z"
            strokeOpacity="0.3"
          />
        </g>

        {/* Ripple Effect - Showing Impact Spreading */}
        <g
          className="ripple-effect"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.2"
        >
          <circle cx="500" cy="300" r="150" />
          <circle cx="500" cy="300" r="180" />
          <circle cx="500" cy="300" r="210" />
          <circle cx="500" cy="300" r="250" />
        </g>

        {/* Growth/Tree Elements */}
        <g
          className="growth-elements"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Small Plant - Bottom Left */}
          <path d="M150 520 L150 480" />
          <path d="M150 500 Q135 490 130 475" strokeOpacity="0.7" />
          <path d="M150 490 Q165 480 170 465" strokeOpacity="0.7" />
          <path d="M150 480 Q140 470 140 455" strokeOpacity="0.6" />

          {/* Small Plant - Bottom Right */}
          <path d="M850 520 L850 480" />
          <path d="M850 500 Q835 490 830 475" strokeOpacity="0.7" />
          <path d="M850 490 Q865 480 870 465" strokeOpacity="0.7" />
          <path d="M850 480 Q860 470 860 455" strokeOpacity="0.6" />
        </g>

        {/* Decorative Corner Elements */}
        <g
          className="corner-decor"
          stroke="url(#impactGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        >
          <path d="M20 20 L20 60 M20 20 L60 20" />
          <path d="M980 20 L980 60 M980 20 L940 20" />
          <path d="M20 580 L20 540 M20 580 L60 580" />
          <path d="M980 580 L980 540 M980 580 L940 580" />
        </g>
      </svg>

      {/* Content */}
      <Box className="impact-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="impact-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="impact-english-title"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "0.75rem", md: "0.85rem" },
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "#5a7247",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Our Impact
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`impact-text-container ${
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
                className="impact-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1b1b1b",
                  mb: 1.5,
                }}
              >
                हर खरीद एक जीवन में
              </Typography>
              <Typography
                className="impact-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#5a7247",
                }}
              >
                सकारात्मक बदलाव लाती है।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="impact-animated-text line-1"
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
                Every purchase makes a positive
              </Typography>
              <Typography
                className="impact-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#5a7247",
                }}
              >
                difference to a life.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/how-your-purchase-helps")}
          className="impact-cta"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 500,
            color: "#fff",
            backgroundColor: "#5a7247",
            textTransform: "none",
            letterSpacing: "0.05em",
            padding: { xs: "12px 28px", md: "14px 36px" },
            borderRadius: "4px",
            boxShadow: "0 4px 15px rgba(90, 114, 71, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#4a6239",
              boxShadow: "0 6px 20px rgba(90, 114, 71, 0.4)",
              transform: "translateY(-2px)",
            },
          }}
        >
          See Our Impact →
        </Button>

        {/* Decorative Bottom Element */}
        <Box className="impact-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default OurImpact;
