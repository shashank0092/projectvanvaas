import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
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
    <Box className="cta-section">
      {/* Background Illustration - Forest & Craft Motif */}
      <svg
        className="cta-bg-illustration"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5efe3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c77b30" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Forest Trees - Left */}
        <g
          className="forest-left"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Tree 1 */}
          <path d="M80 500 L80 380" />
          <path d="M80 420 Q50 400 60 370 Q70 350 80 360 Q90 350 100 370 Q110 400 80 420" />
          <path d="M80 380 Q55 360 65 330 Q75 310 80 320 Q85 310 95 330 Q105 360 80 380" />
          <path
            d="M80 340 Q60 320 70 295 Q80 280 90 295 Q100 320 80 340"
            strokeOpacity="0.8"
          />

          {/* Tree 2 */}
          <path d="M150 500 L150 400" strokeOpacity="0.7" />
          <path
            d="M150 440 Q125 420 135 395 Q145 380 150 390 Q155 380 165 395 Q175 420 150 440"
            strokeOpacity="0.7"
          />
          <path
            d="M150 400 Q130 380 140 360 Q150 350 160 360 Q170 380 150 400"
            strokeOpacity="0.6"
          />

          {/* Tree 3 - Background */}
          <path d="M50 500 L50 430" strokeOpacity="0.4" />
          <path
            d="M50 460 Q30 445 40 425 Q50 415 60 425 Q70 445 50 460"
            strokeOpacity="0.4"
          />
        </g>

        {/* Forest Trees - Right */}
        <g
          className="forest-right"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {/* Tree 4 */}
          <path d="M920 500 L920 380" />
          <path d="M920 420 Q890 400 900 370 Q910 350 920 360 Q930 350 940 370 Q950 400 920 420" />
          <path d="M920 380 Q895 360 905 330 Q915 310 920 320 Q925 310 935 330 Q945 360 920 380" />
          <path
            d="M920 340 Q900 320 910 295 Q920 280 930 295 Q940 320 920 340"
            strokeOpacity="0.8"
          />

          {/* Tree 5 */}
          <path d="M850 500 L850 400" strokeOpacity="0.7" />
          <path
            d="M850 440 Q825 420 835 395 Q845 380 850 390 Q855 380 865 395 Q875 420 850 440"
            strokeOpacity="0.7"
          />
          <path
            d="M850 400 Q830 380 840 360 Q850 350 860 360 Q870 380 850 400"
            strokeOpacity="0.6"
          />

          {/* Tree 6 - Background */}
          <path d="M950 500 L950 430" strokeOpacity="0.4" />
          <path
            d="M950 460 Q930 445 940 425 Q950 415 960 425 Q970 445 950 460"
            strokeOpacity="0.4"
          />
        </g>

        {/* Craft Elements - Scattered */}
        <g
          className="craft-elements"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeLinecap="round"
        >
          {/* Pot - Top Left */}
          <path
            d="M200 120 Q180 100 190 80 Q210 70 220 80 Q230 100 210 120 Z"
            strokeOpacity="0.4"
          />
          <ellipse cx="205" cy="80" rx="12" ry="4" strokeOpacity="0.3" />

          {/* Fabric Wave - Top Right */}
          <path
            d="M750 100 Q780 80 810 100 Q840 120 870 100"
            strokeOpacity="0.3"
          />
          <path
            d="M760 115 Q790 95 820 115 Q850 135 880 115"
            strokeOpacity="0.2"
          />

          {/* Loom Pattern - Bottom Center */}
          <path
            d="M450 520 L450 560 M470 520 L470 560 M490 520 L490 560 M510 520 L510 560 M530 520 L530 560"
            strokeOpacity="0.3"
          />
          <path d="M440 530 L540 530 M440 550 L540 550" strokeOpacity="0.25" />

          {/* Small Pot - Right */}
          <path
            d="M780 480 Q770 470 775 455 Q785 450 795 455 Q800 470 790 480 Z"
            strokeOpacity="0.35"
          />
        </g>

        {/* Decorative Leaves */}
        <g
          className="leaves"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeOpacity="0.25"
        >
          {/* Floating Leaves */}
          <path d="M300 150 Q310 140 320 150 Q310 160 300 150" />
          <path d="M700 200 Q710 190 720 200 Q710 210 700 200" />
          <path d="M250 400 Q260 390 270 400 Q260 410 250 400" />
          <path d="M750 350 Q760 340 770 350 Q760 360 750 350" />
        </g>

        {/* Mountain Silhouette - Background */}
        <g
          className="mountains"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        >
          <path d="M0 500 Q100 400 200 450 Q300 350 400 420 Q500 320 600 400 Q700 350 800 420 Q900 380 1000 450 L1000 500 Z" />
        </g>

        {/* Stars/Sparkles */}
        <g
          className="sparkles"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        >
          <path d="M300 80 L303 75 L306 80 L311 82 L306 84 L303 89 L300 84 L295 82 Z" />
          <path d="M700 120 L702 117 L704 120 L707 121 L704 122 L702 125 L700 122 L697 121 Z" />
          <path d="M500 60 L502 56 L504 60 L508 62 L504 64 L502 68 L500 64 L496 62 Z" />
        </g>

        {/* Corner Decorative Lines */}
        <g
          className="corner-lines"
          stroke="url(#ctaGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        >
          <path d="M30 30 L30 80 M30 30 L80 30" />
          <path d="M970 30 L970 80 M970 30 L920 30" />
          <path d="M30 570 L30 520 M30 570 L80 570" />
          <path d="M970 570 L970 520 M970 570 L920 570" />
        </g>
      </svg>

      {/* Content */}
      <Box className="cta-content-wrapper">
        {/* Decorative Top Line */}
        <Box className="cta-top-line" />

        {/* English Heading */}
        <Typography
          variant="overline"
          className="cta-english-title"
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
          Be Part of the Change
        </Typography>

        {/* Animated Hindi/English Text */}
        <Box
          className={`cta-text-container ${
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
                className="cta-animated-text line-1"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#f5efe3",
                  mb: 1.5,
                }}
              >
                आपकी एक खरीद,
              </Typography>
              <Typography
                className="cta-animated-text line-2"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#c77b30",
                }}
              >
                किसी के जीवन की दिशा बदल सकती है।
              </Typography>
            </Box>
          ) : (
            <Box className="text-block">
              <Typography
                className="cta-animated-text line-1"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#f5efe3",
                  mb: 1.5,
                }}
              >
                One purchase of yours can change
              </Typography>
              <Typography
                className="cta-animated-text line-2"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#c77b30",
                }}
              >
                the course of someone's life.
              </Typography>
            </Box>
          )}
        </Box>

        {/* CTA Buttons */}
        <Box
          className="cta-buttons"
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/shop")}
            className="cta-primary"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 500,
              color: "#1b1b1b",
              backgroundColor: "#c77b30",
              textTransform: "none",
              letterSpacing: "0.05em",
              padding: { xs: "12px 32px", md: "14px 40px" },
              borderRadius: "4px",
              boxShadow: "0 4px 15px rgba(199, 123, 48, 0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#d4893e",
                boxShadow: "0 6px 25px rgba(199, 123, 48, 0.5)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Shop Now →
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/meet-our-artists")}
            className="cta-secondary"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 500,
              color: "#f5efe3",
              borderColor: "#f5efe3",
              textTransform: "none",
              letterSpacing: "0.05em",
              padding: { xs: "11px 28px", md: "13px 36px" },
              borderRadius: "4px",
              borderWidth: "1.5px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 239, 227, 0.1)",
                borderColor: "#c77b30",
                color: "#c77b30",
                transform: "translateY(-2px)",
              },
            }}
          >
            Support an Artisan
          </Button>
        </Box>

        {/* Decorative Bottom Element */}
        <Box className="cta-bottom-deco">
          <Box className="deco-line" />
          <Box className="deco-diamond" />
          <Box className="deco-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
