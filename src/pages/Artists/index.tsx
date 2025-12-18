import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { artisans } from "../../data/artisans";
import "./Artists.css";

const Artists = () => {
  const navigate = useNavigate();

  return (
    <Box className="artists-page">
      <Header />

      {/* Hero Section */}
      <Box className="artists-hero">
        <Box className="artists-hero-overlay" />
        <svg
          className="artists-hero-illustration"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="artistHeroGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f5efe3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c77b30" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g stroke="url(#artistHeroGrad)" fill="none" strokeWidth="0.8">
            {/* Hands illustration */}
            <path d="M150 250 Q130 220 140 190 Q160 170 180 185 Q200 170 210 190 Q220 220 200 250" />
            <path
              d="M155 190 L150 160 M175 180 L175 145 M195 190 L200 160"
              strokeOpacity="0.6"
            />
            <path d="M850 250 Q830 220 840 190 Q860 170 880 185 Q900 170 910 190 Q920 220 900 250" />
            <path
              d="M855 190 L850 160 M875 180 L875 145 M895 190 L900 160"
              strokeOpacity="0.6"
            />
            <circle
              cx="500"
              cy="200"
              r="80"
              strokeOpacity="0.2"
              strokeDasharray="5,5"
            />
            <circle cx="500" cy="200" r="60" strokeOpacity="0.15" />
          </g>
        </svg>

        <Box className="artists-hero-content">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "0.7rem", md: "0.8rem" },
              letterSpacing: "0.3em",
              color: "#c77b30",
              mb: 2,
            }}
          >
            The Heart of Our Craft
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 500,
              color: "#f5efe3",
              mb: 2,
            }}
          >
            Meet Our Artisans
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "rgba(245, 239, 227, 0.85)",
              mb: 2,
              maxWidth: "700px",
            }}
          >
            हर कृति के पीछे एक जीवन, एक संघर्ष और एक कहानी छिपी है।
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontStyle: "italic",
              color: "rgba(245, 239, 227, 0.7)",
              maxWidth: "600px",
            }}
          >
            Behind every creation lies a life, a struggle, and a story.
          </Typography>
        </Box>
      </Box>

      {/* Intro Section */}
      <Box className="artists-intro">
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "#555",
            lineHeight: 1.8,
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          Our artisans are the soul of Vanvaas. Each one brings generations of
          skill, dedication, and cultural heritage to their craft. By supporting
          them, you're not just buying a product – you're preserving traditions,
          empowering families, and keeping ancient art forms alive.
        </Typography>
      </Box>

      {/* Artists Grid */}
      <Box className="artists-grid-section">
        <Grid container spacing={4}>
          {artisans.map((artisan) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={artisan.id}>
              <Card className="artisan-card">
                <Box className="artisan-image-wrapper">
                  <CardMedia
                    component="img"
                    image={artisan.image}
                    alt={artisan.name}
                    className="artisan-image"
                  />
                  <Box className="artisan-overlay">
                    <Typography className="artisan-experience">
                      {artisan.experience}
                    </Typography>
                  </Box>
                </Box>
                <CardContent className="artisan-content">
                  <Typography
                    className="artisan-name"
                    sx={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "#1b1b1b",
                      mb: 0.5,
                    }}
                  >
                    {artisan.name}
                  </Typography>
                  <Typography
                    className="artisan-craft"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.9rem",
                      color: "#c77b30",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {artisan.craft}
                  </Typography>
                  <Typography
                    className="artisan-location"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.8rem",
                      color: "#888",
                      mb: 2,
                    }}
                  >
                    📍 {artisan.location}
                  </Typography>
                  <Typography
                    className="artisan-bio"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      color: "#666",
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {artisan.shortBio}
                  </Typography>
                  <Box className="artisan-stats">
                    <Box className="stat-item">
                      <Typography className="stat-value">
                        {artisan.familyMembers}
                      </Typography>
                      <Typography className="stat-label">
                        Family Members
                      </Typography>
                    </Box>
                    <Box className="stat-item">
                      <Typography className="stat-value">
                        {artisan.trainedArtisans}
                      </Typography>
                      <Typography className="stat-label">Trained</Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate(`/artisan/${artisan.id}`)}
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      color: "#8b5a2b",
                      borderColor: "#8b5a2b",
                      textTransform: "none",
                      mt: 2,
                      "&:hover": {
                        backgroundColor: "#8b5a2b",
                        color: "#fff",
                        borderColor: "#8b5a2b",
                      },
                    }}
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Impact Section */}
      <Box className="artists-impact-section">
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#c77b30",
          }}
        >
          Our Collective Impact
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mt: 1,
            mb: 4,
          }}
        >
          Together, We Make a Difference
        </Typography>
        <Box className="impact-stats">
          <Box className="impact-stat">
            <Typography className="impact-number">12+</Typography>
            <Typography className="impact-label">Master Artisans</Typography>
          </Box>
          <Box className="impact-stat">
            <Typography className="impact-number">150+</Typography>
            <Typography className="impact-label">Artisans Trained</Typography>
          </Box>
          <Box className="impact-stat">
            <Typography className="impact-number">50+</Typography>
            <Typography className="impact-label">Families Supported</Typography>
          </Box>
          <Box className="impact-stat">
            <Typography className="impact-number">8</Typography>
            <Typography className="impact-label">States Covered</Typography>
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box className="artists-cta-section">
        <Typography
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#f5efe3",
            mb: 2,
          }}
        >
          Support an Artisan Today
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "rgba(245, 239, 227, 0.8)",
            mb: 4,
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            marginBottom: 4,
          }}
        >
          आपकी एक खरीद किसी के जीवन की दिशा बदल सकती है।
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/shop")}
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "1rem",
            fontWeight: 500,
            color: "#1b1b1b",
            backgroundColor: "#c77b30",
            textTransform: "none",
            padding: "14px 40px",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#a66628",
              transform: "translateY(-2px)",
            },
          }}
        >
          Shop Artisan Creations
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default Artists;
