import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./AboutVanvaas.css";

const AboutVanvaas = () => {
  const navigate = useNavigate();

  return (
    <Box className="about-vanvaas-page">
      <Header />

      {/* Hero Section */}
      <Box className="vanvaas-hero">
        <Box className="vanvaas-hero-overlay" />
        <svg
          className="vanvaas-hero-illustration"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="vanvaasHeroGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f5efe3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c77b30" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g stroke="url(#vanvaasHeroGrad)" fill="none" strokeWidth="0.8">
            {/* Forest/Nature illustration */}
            <path
              d="M100 300 L130 250 L160 300 M120 280 L130 260 L140 280"
              strokeOpacity="0.2"
            />
            <path
              d="M200 300 L240 230 L280 300 M225 270 L240 240 L255 270"
              strokeOpacity="0.15"
            />
            <path
              d="M800 300 L840 230 L880 300 M825 270 L840 240 L855 270"
              strokeOpacity="0.15"
            />
            <path
              d="M700 300 L730 250 L760 300 M720 280 L730 260 L740 280"
              strokeOpacity="0.2"
            />
            {/* Hands/craft elements */}
            <circle cx="500" cy="200" r="60" strokeOpacity="0.15" />
            <path
              d="M470 200 Q500 170 530 200 Q500 230 470 200"
              strokeOpacity="0.2"
            />
          </g>
        </svg>

        <Box className="vanvaas-hero-content">
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
            Our Story
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
            About Vanvaas
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "rgba(245, 239, 227, 0.85)",
              mb: 2,
              maxWidth: "800px",
            }}
          >
            वनवास – जहाँ हर कृति में एक कहानी है, हर हाथ में एक सपना है।
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
            Where every creation tells a story, every hand holds a dream.
          </Typography>
        </Box>
      </Box>

      {/* What is Vanvaas */}
      <Box className="vanvaas-intro-section">
        <Box className="vanvaas-content-container">
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 500,
              color: "#1b1b1b",
              mb: 4,
              textAlign: "center",
            }}
          >
            What is Vanvaas?
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1.05rem",
              color: "#555",
              lineHeight: 2,
              mb: 4,
              textAlign: "center",
            }}
          >
            <strong>Vanvaas</strong> is not just an e-commerce platform—it's a
            movement. A bridge between India's rich artisan heritage and the
            modern world. We bring you handcrafted treasures made by skilled
            artisans, many of whom are differently-abled, rural craftspeople,
            and traditional artists who have preserved their art forms for
            generations.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: "1.1rem",
              color: "#c77b30",
              lineHeight: 1.8,
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            "हस्तकला सिर्फ एक उत्पाद नहीं, यह एक परंपरा है, एक विरासत है, एक
            पहचान है।"
          </Typography>
        </Box>
      </Box>

      {/* Our Mission */}
      <Box className="vanvaas-mission-section">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="mission-content">
              <Typography
                variant="overline"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "#c77b30",
                }}
              >
                Our Purpose
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mt: 1,
                  mb: 3,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                To empower artisans by providing them a dignified platform to
                showcase their craft, earn fair wages, and preserve India's
                dying art forms. We believe that every purchase can transform a
                life, every product can tell a story, and every customer can
                become a patron of culture.
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.9,
                }}
              >
                Vanvaas is an initiative by the{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "#c77b30",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onClick={() => navigate("/about-kamala-trust")}
                >
                  Kamala Ankibai Ghamandiram Gowani Trust
                </Typography>
                , dedicated to social empowerment and cultural preservation.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="mission-values">
              {[
                {
                  icon: "🎨",
                  title: "Preserve Heritage",
                  desc: "Keeping alive traditional art forms that are centuries old",
                },
                {
                  icon: "🤝",
                  title: "Fair Trade",
                  desc: "Ensuring artisans receive fair compensation for their work",
                },
                {
                  icon: "♿",
                  title: "Inclusive Employment",
                  desc: "Creating opportunities for differently-abled artisans",
                },
                {
                  icon: "🌱",
                  title: "Sustainable Craft",
                  desc: "Promoting eco-friendly materials and traditional methods",
                },
              ].map((item, index) => (
                <Box key={index} className="value-item">
                  <Typography sx={{ fontSize: "2rem" }}>{item.icon}</Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: "#1b1b1b",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Why Vanvaas */}
      <Box className="vanvaas-why-section">
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#c77b30",
            textAlign: "center",
            display: "block",
          }}
        >
          The Difference
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mb: 5,
            textAlign: "center",
          }}
        >
          Why Choose Vanvaas?
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: "👐",
              title: "100% Handcrafted",
              hindiDesc: "हर उत्पाद कारीगर के हाथों से बना है",
              engDesc:
                "Every product is handmade with love, skill, and dedication",
            },
            {
              icon: "📜",
              title: "Authentic Stories",
              hindiDesc: "हर कृति के पीछे एक कहानी है",
              engDesc:
                "Know the artisan, their journey, and the story behind each piece",
            },
            {
              icon: "💰",
              title: "Direct Impact",
              hindiDesc: "आपकी खरीद सीधे कारीगर तक पहुँचती है",
              engDesc:
                "Your purchase directly supports artisan families and their communities",
            },
            {
              icon: "🏆",
              title: "Quality Assurance",
              hindiDesc: "गुणवत्ता की गारंटी",
              engDesc:
                "Each product undergoes quality checks while preserving its handmade charm",
            },
            {
              icon: "🌍",
              title: "Cultural Preservation",
              hindiDesc: "भारतीय विरासत का संरक्षण",
              engDesc:
                "Help preserve endangered art forms and traditional craftsmanship",
            },
            {
              icon: "💚",
              title: "Eco-Friendly",
              hindiDesc: "प्रकृति के अनुकूल",
              engDesc:
                "Most products use natural, sustainable, and locally-sourced materials",
            },
          ].map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box className="why-card">
                <Typography sx={{ fontSize: "2.5rem", mb: 2 }}>
                  {item.icon}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                    fontSize: "0.9rem",
                    color: "#c77b30",
                    mb: 1,
                  }}
                >
                  {item.hindiDesc}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {item.engDesc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Journey */}
      <Box className="vanvaas-journey-section">
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#f5efe3",
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Journey
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "1rem",
            color: "rgba(245, 239, 227, 0.85)",
            lineHeight: 1.9,
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            mb: 4,
          }}
        >
          Vanvaas was born from a simple observation: India's most talented
          artisans, many of them from marginalized communities, struggled to
          find fair markets for their exceptional work. Traditional crafts were
          dying, not from lack of skill, but from lack of opportunity.
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "1rem",
            color: "rgba(245, 239, 227, 0.85)",
            lineHeight: 1.9,
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Under the guidance of the Kamala Trust and the visionary leadership of
          Smt. Nidarshana Gowani, we set out to change this. Today, Vanvaas
          connects artisans from remote villages across India to conscious
          consumers who value authenticity, craftsmanship, and social impact.
        </Typography>
      </Box>

      {/* CTA Section */}
      <Box className="vanvaas-cta-section">
        <Typography
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mb: 2,
          }}
        >
          Join the Movement
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "#666",
            mb: 4,
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            marginBottom: 4,
          }}
        >
          हर खरीद एक बदलाव है। हर समर्थन एक उम्मीद है।
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/shop")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "#c77b30",
              textTransform: "none",
              padding: "14px 40px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#a66628",
              },
            }}
          >
            Explore Shop
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/artists")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              fontWeight: 500,
              color: "#8b5a2b",
              borderColor: "#8b5a2b",
              textTransform: "none",
              padding: "14px 40px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "rgba(139, 90, 43, 0.08)",
                borderColor: "#8b5a2b",
              },
            }}
          >
            Meet Artisans
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutVanvaas;
