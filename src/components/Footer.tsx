import { Box, Typography, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className="footer">
      {/* Background Illustration */}
      <svg
        className="footer-bg-illustration"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="footerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c77b30" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Handloom Pattern - Left */}
        <g
          className="handloom-left"
          stroke="url(#footerGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeLinecap="round"
        >
          <path d="M50 50 L50 150 M70 50 L70 150 M90 50 L90 150 M110 50 L110 150 M130 50 L130 150" />
          <path d="M40 70 L140 70 M40 90 L140 90 M40 110 L140 110 M40 130 L140 130" />
          <path
            d="M50 200 L50 300 M70 200 L70 300 M90 200 L90 300"
            strokeOpacity="0.5"
          />
          <path d="M40 220 L100 220 M40 260 L100 260" strokeOpacity="0.5" />
        </g>

        {/* Traditional Pattern - Center */}
        <g
          className="traditional-center"
          stroke="url(#footerGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeLinecap="round"
        >
          <path
            d="M550 100 Q580 80 600 100 Q620 130 600 160 Q570 180 550 150 Q540 120 550 100"
            strokeOpacity="0.6"
          />
          <path
            d="M560 110 Q580 95 595 110 Q610 135 595 155 Q575 170 560 145 Q550 125 560 110"
            strokeOpacity="0.4"
          />
          <path d="M650 100 L680 100 L680 130 L650 130 Z" strokeOpacity="0.5" />
          <path d="M655 105 L675 105 L675 125 L655 125 Z" strokeOpacity="0.3" />
          <path d="M665 100 L665 130 M650 115 L680 115" strokeOpacity="0.4" />
        </g>

        {/* Craft Pattern - Right */}
        <g
          className="craft-right"
          stroke="url(#footerGradient)"
          fill="none"
          strokeWidth="0.5"
          strokeLinecap="round"
        >
          <circle cx="1100" cy="100" r="40" strokeOpacity="0.5" />
          <circle cx="1100" cy="100" r="30" strokeOpacity="0.4" />
          <circle cx="1100" cy="100" r="20" strokeOpacity="0.3" />
          <circle cx="1100" cy="100" r="10" strokeOpacity="0.2" />
          <path
            d="M1050 200 Q1070 180 1090 200 Q1110 220 1130 200"
            strokeOpacity="0.4"
          />
          <path
            d="M1050 230 Q1070 210 1090 230 Q1110 250 1130 230"
            strokeOpacity="0.3"
          />
          <path
            d="M1050 260 Q1070 240 1090 260 Q1110 280 1130 260"
            strokeOpacity="0.2"
          />
        </g>

        {/* Decorative Border Line */}
        <g
          className="border-pattern"
          stroke="url(#footerGradient)"
          fill="none"
          strokeWidth="0.3"
          strokeOpacity="0.3"
        >
          <path d="M0 20 Q300 30 600 20 Q900 10 1200 20" />
          <path d="M0 380 Q300 370 600 380 Q900 390 1200 380" />
        </g>
      </svg>

      {/* Footer Content */}
      <Box className="footer-content">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Column 1: Brand & Purpose */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box className="footer-brand">
              <Typography
                variant="h5"
                className="brand-name"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 600,
                  color: "#f5efe3",
                  mb: 2,
                  letterSpacing: "0.02em",
                }}
              >
                Vanvaas
              </Typography>

              <Typography
                className="brand-tagline-en"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "#c77b30",
                  mb: 1,
                  lineHeight: 1.5,
                }}
              >
                Crafted by Hands. Preserved with Pride.
              </Typography>

              <Typography
                className="brand-tagline-hi"
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: "0.85rem",
                  color: "rgba(245, 239, 227, 0.7)",
                  lineHeight: 1.6,
                }}
              >
                हुनर, सम्मान और आत्मनिर्भरता की पहल।
              </Typography>
            </Box>
          </Grid>

          {/* Column 2: Shop */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box className="footer-column">
              <Typography
                variant="h6"
                className="column-title"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#c77b30",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  mb: 2.5,
                }}
              >
                Shop
              </Typography>

              <Box className="footer-links">
                <MuiLink component={Link} to="/shop" className="footer-link">
                  Shop
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/all-artworks"
                  className="footer-link"
                >
                  All Artworks
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/categories"
                  className="footer-link"
                >
                  Categories
                </MuiLink>
                <MuiLink component={Link} to="/cart" className="footer-link">
                  Cart
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/my-account"
                  className="footer-link"
                >
                  My Account
                </MuiLink>
              </Box>
            </Box>
          </Grid>

          {/* Column 3: Artisans & Impact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box className="footer-column">
              <Typography
                variant="h6"
                className="column-title"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#c77b30",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  mb: 2.5,
                }}
              >
                Artisans & Impact
              </Typography>

              <Box className="footer-links">
                <MuiLink
                  component={Link}
                  to="/meet-our-artists"
                  className="footer-link"
                >
                  Meet Our Artists
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/stories-of-craft"
                  className="footer-link"
                >
                  Stories of Craft
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/artisan-empowerment"
                  className="footer-link"
                >
                  Artisan Empowerment
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/how-your-purchase-helps"
                  className="footer-link"
                >
                  How Your Purchase Helps
                </MuiLink>
              </Box>
            </Box>
          </Grid>

          {/* Column 4: About & Connect */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box className="footer-column">
              <Typography
                variant="h6"
                className="column-title"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#c77b30",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  mb: 2.5,
                }}
              >
                About & Connect
              </Typography>

              <Box className="footer-links">
                <MuiLink
                  component={Link}
                  to="/about-vanvaas"
                  className="footer-link"
                >
                  About Vanvaas
                </MuiLink>
                <MuiLink
                  component={Link}
                  to="/about-kamala-trust"
                  className="footer-link"
                >
                  About Kamala Trust
                </MuiLink>
                <MuiLink component={Link} to="/contact" className="footer-link">
                  Contact Us
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box className="footer-divider" />

        {/* Bottom Bar */}
        <Box className="footer-bottom">
          <Typography
            className="copyright"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.8rem",
              color: "rgba(245, 239, 227, 0.6)",
            }}
          >
            © {currentYear} Vanvaas. All rights reserved.
          </Typography>

          <Typography
            className="trust-credit"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.8rem",
              color: "rgba(245, 239, 227, 0.6)",
            }}
          >
            An initiative supported by{" "}
            <MuiLink
              component={Link}
              to="/about-kamala-trust"
              sx={{
                color: "#c77b30",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Kamala Trust
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
