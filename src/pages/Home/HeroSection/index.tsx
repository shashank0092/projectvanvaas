import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  const [showHindi, setShowHindi] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHindi((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="premium-hero">
      {/* Cinematic Background Layers */}
      <Box className="hero-cinematic-bg">
        <Box className="bg-layer bg-forest-depth" />
        <Box className="bg-layer bg-mist" />
        <Box className="bg-layer bg-light-beams" />
        <Box className="bg-layer bg-vignette" />
      </Box>

      {/* Subtle Light Animation */}
      <Box className="ambient-light">
        <Box className="light-beam beam-1" />
        <Box className="light-beam beam-2" />
        <Box className="light-beam beam-3" />
      </Box>

      {/* Floating Dust Particles */}
      <Box className="dust-particles">
        {[...Array(12)].map((_, i) => (
          <Box key={i} className={`dust dust-${i + 1}`} />
        ))}
      </Box>

      {/* Artisan Illustrators */}
      <Box className="hero-illustrators">
        {/* Lotus - Top Right */}
        <svg className="illus illus-lotus" viewBox="0 0 120 100">
          <g opacity="0.12">
            <path
              d="M60 85 Q55 70 45 60 Q35 50 40 35 Q45 25 60 20 Q75 25 80 35 Q85 50 75 60 Q65 70 60 85Z"
              fill="#C77B30"
            />
            <path
              d="M60 85 Q50 65 35 55 Q20 45 25 30 Q30 20 45 20 Q55 25 60 40 Q65 25 75 20 Q90 20 95 30 Q100 45 85 55 Q70 65 60 85Z"
              fill="#8B5A2B"
            />
            <path
              d="M60 85 Q45 60 25 50 Q10 40 15 25 Q25 15 40 18 Q50 22 60 35 Q70 22 80 18 Q95 15 105 25 Q110 40 95 50 Q75 60 60 85Z"
              fill="#C77B30"
              opacity="0.6"
            />
          </g>
        </svg>

        {/* Pottery - Bottom Left */}
        <svg className="illus illus-pottery" viewBox="0 0 80 100">
          <g opacity="0.1">
            <ellipse cx="40" cy="88" rx="25" ry="6" fill="#8B5A2B" />
            <path
              d="M18 82 Q14 65 17 45 Q20 28 40 22 Q60 28 63 45 Q66 65 62 82 Q52 88 40 88 Q28 88 18 82Z"
              fill="#C77B30"
            />
            <ellipse cx="40" cy="22" rx="12" ry="4" fill="#A67B5B" />
            <path
              d="M25 35 Q40 32 55 35"
              stroke="#8B5A2B"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M22 50 Q40 46 58 50"
              stroke="#8B5A2B"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M20 65 Q40 61 60 65"
              stroke="#8B5A2B"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />
          </g>
        </svg>

        {/* Handwoven Textile - Top Left */}
        <svg className="illus illus-textile" viewBox="0 0 100 80">
          <g opacity="0.1">
            <path
              d="M10 12 Q30 8 50 12 T90 12 L88 68 Q70 72 50 68 T12 68Z"
              fill="#C77B30"
            />
            <path
              d="M15 20 L85 20 M15 32 L85 32 M15 44 L85 44 M15 56 L85 56"
              stroke="#8B5A2B"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M25 12 L25 68 M40 12 L40 68 M55 12 L55 68 M70 12 L70 68"
              stroke="#8B5A2B"
              strokeWidth="1"
              opacity="0.3"
            />
          </g>
        </svg>

        {/* Wooden Craft - Right */}
        <svg className="illus illus-wood" viewBox="0 0 90 100">
          <g opacity="0.1">
            <rect x="25" y="15" width="40" height="70" rx="4" fill="#8B5A2B" />
            <path
              d="M30 20 L30 80 M42 20 L42 80 M54 20 L54 80"
              stroke="#6B4423"
              strokeWidth="1"
              opacity="0.4"
            />
            <rect
              x="35"
              y="35"
              width="20"
              height="30"
              rx="3"
              fill="#6B4423"
              opacity="0.5"
            />
            <circle cx="45" cy="50" r="4" fill="#A67B5B" />
          </g>
        </svg>

        {/* Paint Brush - Bottom */}
        <svg className="illus illus-brush" viewBox="0 0 100 40">
          <g opacity="0.1">
            <rect x="10" y="15" width="50" height="10" rx="2" fill="#8B5A2B" />
            <path d="M60 12 L95 18 L95 22 L60 28Z" fill="#C77B30" />
            <path d="M60 15 L60 25" stroke="#6B4423" strokeWidth="1" />
          </g>
        </svg>

        {/* Art Palette - Bottom Right */}
        <svg className="illus illus-palette" viewBox="0 0 100 80">
          <g opacity="0.1">
            <ellipse cx="50" cy="40" rx="45" ry="35" fill="#C77B30" />
            <circle cx="25" cy="30" r="8" fill="#8B5A2B" />
            <circle cx="40" cy="55" r="6" fill="#A67B5B" />
            <circle cx="60" cy="25" r="7" fill="#6B4423" />
            <circle cx="75" cy="45" r="6" fill="#8B5A2B" />
            <ellipse cx="70" cy="30" rx="12" ry="8" fill="#f5efe3" />
          </g>
        </svg>

        {/* Decorative Mandala - Center Background */}
        <svg className="illus illus-mandala" viewBox="0 0 200 200">
          <g opacity="0.05">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#C77B30"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#C77B30"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="#C77B30"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="30"
              fill="none"
              stroke="#C77B30"
              strokeWidth="1"
            />
            <path
              d="M100 10 L100 190 M10 100 L190 100"
              stroke="#C77B30"
              strokeWidth="0.5"
            />
            <path
              d="M30 30 L170 170 M170 30 L30 170"
              stroke="#C77B30"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        {/* Easel / Drawing Board */}
        <svg className="illus illus-easel" viewBox="0 0 100 120">
          <g opacity="0.08">
            <path
              d="M20 115 L50 20 L80 115"
              stroke="#8B5A2B"
              strokeWidth="3"
              fill="none"
            />
            <rect x="25" y="25" width="50" height="40" rx="2" fill="#C77B30" />
            <rect
              x="30"
              y="30"
              width="40"
              height="30"
              fill="#f5efe3"
              stroke="#8B5A2B"
              strokeWidth="1"
            />
            <path
              d="M35 45 Q45 35 55 45 Q60 50 65 45"
              stroke="#C77B30"
              strokeWidth="1"
              fill="none"
            />
          </g>
        </svg>

        {/* Paint Tubes */}
        <svg className="illus illus-tubes" viewBox="0 0 80 50">
          <g opacity="0.08">
            <rect x="5" y="20" width="20" height="25" rx="3" fill="#C77B30" />
            <rect x="5" y="15" width="20" height="8" rx="2" fill="#8B5A2B" />
            <rect x="30" y="22" width="18" height="23" rx="3" fill="#A67B5B" />
            <rect x="30" y="17" width="18" height="8" rx="2" fill="#6B4423" />
            <rect x="53" y="24" width="16" height="21" rx="3" fill="#8B5A2B" />
            <rect x="53" y="19" width="16" height="8" rx="2" fill="#C77B30" />
          </g>
        </svg>

        {/* Pencils */}
        <svg className="illus illus-pencils" viewBox="0 0 100 60">
          <g opacity="0.08">
            <rect x="10" y="25" width="60" height="8" fill="#C77B30" />
            <polygon points="70,25 85,29 70,33" fill="#f5efe3" />
            <rect
              x="15"
              y="35"
              width="55"
              height="7"
              fill="#8B5A2B"
              transform="rotate(-8 40 38)"
            />
            <polygon
              points="70,32 83,35 70,40"
              fill="#f5efe3"
              transform="rotate(-8 75 36)"
            />
            <rect
              x="20"
              y="12"
              width="50"
              height="7"
              fill="#A67B5B"
              transform="rotate(5 45 15)"
            />
            <polygon
              points="70,12 82,15 70,19"
              fill="#f5efe3"
              transform="rotate(5 75 15)"
            />
          </g>
        </svg>

        {/* Ink Bottle */}
        <svg className="illus illus-ink" viewBox="0 0 60 80">
          <g opacity="0.08">
            <path
              d="M15 30 L15 65 Q15 75 30 75 Q45 75 45 65 L45 30 Q45 25 30 25 Q15 25 15 30Z"
              fill="#8B5A2B"
            />
            <ellipse cx="30" cy="28" rx="15" ry="5" fill="#6B4423" />
            <rect x="25" y="15" width="10" height="15" fill="#C77B30" />
            <ellipse cx="30" cy="15" rx="5" ry="2" fill="#A67B5B" />
          </g>
        </svg>

        {/* Weaving Loom */}
        <svg className="illus illus-loom" viewBox="0 0 120 100">
          <g opacity="0.06">
            <rect
              x="10"
              y="10"
              width="100"
              height="80"
              fill="none"
              stroke="#8B5A2B"
              strokeWidth="3"
            />
            <path
              d="M20 10 L20 90 M35 10 L35 90 M50 10 L50 90 M65 10 L65 90 M80 10 L80 90 M95 10 L95 90"
              stroke="#C77B30"
              strokeWidth="1"
            />
            <path
              d="M10 25 L110 25 M10 40 L110 40 M10 55 L110 55 M10 70 L110 70"
              stroke="#A67B5B"
              strokeWidth="1"
            />
          </g>
        </svg>

        {/* Clay Wheel */}
        <svg className="illus illus-wheel" viewBox="0 0 100 100">
          <g opacity="0.06">
            <ellipse cx="50" cy="80" rx="40" ry="10" fill="#8B5A2B" />
            <ellipse cx="50" cy="75" rx="35" ry="8" fill="#A67B5B" />
            <rect x="45" y="40" width="10" height="35" fill="#6B4423" />
            <ellipse cx="50" cy="40" rx="20" ry="15" fill="#C77B30" />
            <ellipse cx="50" cy="35" rx="12" ry="8" fill="#8B5A2B" />
          </g>
        </svg>
      </Box>

      {/* Hero Content */}
      <Box className="premium-hero-content">
        <Box className="content-wrapper">
          {/* Decorative Line */}
          <Box className="decorative-line" />

          {/* Project Vanvaas Heading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily:
                '"Playfair Display", "Cormorant Garamond", Georgia, serif',
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.8rem",
                lg: "3.2rem",
              },
              fontWeight: 600,
              letterSpacing: { xs: "0.1em", md: "0.15em" },
              lineHeight: 1.2,
              background:
                "linear-gradient(135deg, #8B4513 0%, #B8860B 30%, #DAA520 60%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow:
                "0 3px 12px rgba(218, 165, 32, 0.25), 0 1px 3px rgba(139, 69, 19, 0.2)",
              textTransform: "uppercase",
              mb: { xs: 1, md: 1.5 },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-8px",
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

          {/* Main Headline */}
          <Typography
            variant="h1"
            className="premium-headline"
            sx={{
              fontFamily:
                '"Playfair Display", "Cormorant Garamond", Georgia, serif',
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "3.8rem",
                lg: "4.5rem",
              },
              fontWeight: 500,
              letterSpacing: { xs: "0.02em", md: "0.03em" },
              lineHeight: 1.15,
              color: "#1B1B1B",
              mb: { xs: 1.5, md: 2 },
              mt: { xs: 2, md: 2.5 },
            }}
          >
            Crafted by Hands.
            <br />
            <Box
              component="span"
              className="animated-text-wrapper"
              sx={{
                display: "inline-block",
                color: "#D4AF37",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {showHindi ? (
                <Box component="span" className="hero-animated-text">
                  गौरवपूर्वक संरक्षित
                </Box>
              ) : (
                <Box component="span" className="hero-animated-text">
                  Proudly Preserved.
                </Box>
              )}
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="body1"
            className="premium-subheadline"
            sx={{
              fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(27, 27, 27, 0.75)",
              maxWidth: "520px",
              mb: { xs: 3, md: 4 },
              letterSpacing: "0.01em",
            }}
          >
            Authentic creations by differently-abled artisans, rooted in
            tradition and crafted with dignity.
          </Typography>

          {/* CTA Buttons */}
          <Box className="premium-cta-group">
            <Button
              variant="contained"
              onClick={() => navigate("/shop")}
              className="cta-explore"
              sx={{
                backgroundColor: "#D4AF37",
                color: "#1A1A1A",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 1.4, md: 1.6 },
                borderRadius: "2px",
                boxShadow: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "#C9A227",
                  boxShadow: "0 8px 30px rgba(212, 175, 55, 0.25)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Explore the Collection
            </Button>

            <Button
              variant="text"
              onClick={() => navigate("/meet-our-artists")}
              className="cta-artisans"
              sx={{
                color: "#1B1B1B",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                px: { xs: 2, md: 3 },
                py: { xs: 1.4, md: 1.6 },
                borderRadius: "2px",
                position: "relative",
                transition: "all 0.4s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0%",
                  height: "1px",
                  backgroundColor: "#D4AF37",
                  transition: "width 0.4s ease",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#D4AF37",
                  "&::after": {
                    width: "60%",
                  },
                },
              }}
            >
              Our Artisans
            </Button>
          </Box>

          {/* Bottom Decorative Element */}
          <Box className="decorative-bottom">
            <Box className="deco-line left" />
            <Box className="deco-diamond" />
            <Box className="deco-line right" />
          </Box>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <Box className="premium-scroll-indicator">
        <Box className="scroll-line" />
        <Typography
          variant="caption"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            color: "rgba(27, 27, 27, 0.5)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            mt: 1,
          }}
        >
          Scroll
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
