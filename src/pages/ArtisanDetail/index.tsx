import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getArtisanById } from "../../data/artisans";
import { products } from "../../data/products";
import "./ArtisanDetail.css";

const ArtisanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const artisan = getArtisanById(Number(id));

  if (!artisan) {
    return (
      <Box className="artisan-detail-page">
        <Header />
        <Box className="artisan-not-found">
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: "#1b1b1b",
              mb: 2,
            }}
          >
            Artisan Not Found
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              color: "#666",
              mb: 3,
            }}
          >
            The artisan profile you are looking for does not exist.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/artists")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              backgroundColor: "#c77b30",
              "&:hover": { backgroundColor: "#a66628" },
            }}
          >
            View All Artisans
          </Button>
        </Box>
        <Footer />
      </Box>
    );
  }

  const artisanProducts = products.filter((p) =>
    artisan.productIds.includes(p.id)
  );

  return (
    <Box className="artisan-detail-page">
      <Header />

      {/* Hero Banner */}
      <Box
        className="artisan-hero"
        sx={{
          backgroundImage: `linear-gradient(rgba(27, 27, 27, 0.7), rgba(27, 27, 27, 0.8)), url(${artisan.coverImage})`,
        }}
      >
        <Box className="artisan-hero-content">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "#c77b30",
            }}
          >
            Master Artisan
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 500,
              color: "#f5efe3",
              mt: 1,
              mb: 2,
            }}
          >
            {artisan.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#c77b30",
              mb: 1,
            }}
          >
            {artisan.craft}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              color: "rgba(245, 239, 227, 0.8)",
            }}
          >
            📍 {artisan.location} • {artisan.experience} Experience
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="artisan-main-content">
        <Grid container spacing={6}>
          {/* Left Column - Story */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Story Section */}
            <Box className="artisan-section">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mb: 3,
                }}
              >
                The Story
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.9,
                }}
              >
                {artisan.story}
              </Typography>
            </Box>

            {/* Skills Section */}
            <Box className="artisan-section">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mb: 3,
                }}
              >
                Expertise & Skills
              </Typography>
              <Box className="skills-list">
                {artisan.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      backgroundColor: "rgba(199, 123, 48, 0.1)",
                      color: "#8b5a2b",
                      border: "1px solid rgba(199, 123, 48, 0.2)",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Awards Section */}
            {artisan.awards.length > 0 && (
              <Box className="artisan-section">
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 3,
                  }}
                >
                  Recognition & Awards
                </Typography>
                <Box component="ul" className="awards-list">
                  {artisan.awards.map((award, index) => (
                    <Typography
                      component="li"
                      key={index}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: "0.95rem",
                        color: "#555",
                        mb: 1,
                      }}
                    >
                      🏆 {award}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}

            {/* Products by Artisan */}
            {artisanProducts.length > 0 && (
              <Box className="artisan-section">
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 3,
                  }}
                >
                  Creations by {artisan.name}
                </Typography>
                <Grid container spacing={3}>
                  {artisanProducts.map((product) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={product.id}>
                      <Card
                        className="product-card-mini"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt={product.name}
                          className="product-mini-image"
                        />
                        <CardContent className="product-mini-content">
                          <Typography
                            sx={{
                              fontFamily: '"Playfair Display", Georgia, serif',
                              fontSize: "1rem",
                              fontWeight: 500,
                              color: "#1b1b1b",
                            }}
                          >
                            {product.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: '"Poppins", sans-serif',
                              fontSize: "1rem",
                              fontWeight: 600,
                              color: "#c77b30",
                              mt: 1,
                            }}
                          >
                            ₹{product.price.toLocaleString()}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>

          {/* Right Column - Quick Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box className="artisan-sidebar">
              {/* Profile Card */}
              <Box className="sidebar-card profile-card">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="sidebar-profile-image"
                />
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mt: 2,
                  }}
                >
                  {artisan.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.9rem",
                    color: "#c77b30",
                  }}
                >
                  {artisan.craft}
                </Typography>
              </Box>

              {/* Impact Card */}
              <Box className="sidebar-card impact-card">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "#c77b30",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Your Impact
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {artisan.impactStatement}
                </Typography>
                <Box className="impact-mini-stats">
                  <Box className="mini-stat">
                    <Typography className="mini-stat-value">
                      {artisan.familyMembers}
                    </Typography>
                    <Typography className="mini-stat-label">
                      Family Members Supported
                    </Typography>
                  </Box>
                  <Box className="mini-stat">
                    <Typography className="mini-stat-value">
                      {artisan.trainedArtisans}
                    </Typography>
                    <Typography className="mini-stat-label">
                      Artisans Trained
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* CTA Card */}
              <Box className="sidebar-card cta-card">
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 2,
                  }}
                >
                  Support {artisan.name.split(" ")[0]}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate("/shop")}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#fff",
                    backgroundColor: "#c77b30",
                    textTransform: "none",
                    padding: "12px 24px",
                    mb: 1.5,
                    "&:hover": {
                      backgroundColor: "#a66628",
                    },
                  }}
                >
                  Shop Their Creations
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate("/artists")}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.9rem",
                    color: "#8b5a2b",
                    borderColor: "#8b5a2b",
                    textTransform: "none",
                    padding: "12px 24px",
                    "&:hover": {
                      backgroundColor: "rgba(139, 90, 43, 0.08)",
                    },
                  }}
                >
                  Meet Other Artisans
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default ArtisanDetail;
