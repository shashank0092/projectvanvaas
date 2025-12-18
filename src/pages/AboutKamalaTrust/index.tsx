import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./AboutKamalaTrust.css";

const AboutKamalaTrust = () => {
  return (
    <Box className="about-trust-page">
      <Header />

      {/* Hero Section */}
      <Box className="trust-hero">
        <Box className="trust-hero-overlay" />
        <svg
          className="trust-hero-illustration"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="trustHeroGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f5efe3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c77b30" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g stroke="url(#trustHeroGrad)" fill="none" strokeWidth="0.8">
            {/* Trust emblem illustration */}
            <circle cx="500" cy="200" r="80" strokeOpacity="0.2" />
            <circle cx="500" cy="200" r="60" strokeOpacity="0.15" />
            <path
              d="M470 180 L500 160 L530 180 L530 220 L500 240 L470 220 Z"
              strokeOpacity="0.25"
            />
            <circle cx="200" cy="200" r="40" strokeOpacity="0.1" />
            <circle cx="800" cy="200" r="40" strokeOpacity="0.1" />
          </g>
        </svg>

        <Box className="trust-hero-content">
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
            Our Foundation
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
              fontWeight: 500,
              color: "#f5efe3",
              mb: 2,
            }}
          >
            About Kamala Ankibai Ghamandiram Gowani Trust
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: "rgba(245, 239, 227, 0.85)",
              maxWidth: "800px",
              lineHeight: 1.8,
            }}
          >
            हमारा उद्देश्य सिर्फ सेवाएँ देना नहीं, बल्कि एक ऐसा समुदाय बनाना है
            जो सीखता है, बढ़ता है और एक-दूसरे को सशक्त बनाता है।
          </Typography>
        </Box>
      </Box>

      {/* About Section */}
      <Box className="trust-about-section">
        <Box className="trust-content-container">
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
            Our Legacy Since 1969
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            Established in 1969, Kamala Trust—formally known as the Ankibai
            Ghamandiram Gowani Trust—is a charitable foundation led by
            philanthropist Nidarshana Gowani. Deeply rooted in the values of
            diversity, equity, and inclusion, the trust operates on the
            principle that everyone deserves a healthy, productive life,
            regardless of their background or circumstance.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            The foundation's multi-dimensional work spans across education,
            healthcare, gender equality, rural upliftment, disaster relief, and
            social empowerment. It has built schools and colleges in rural
            Rajasthan, facilitated thousands of students' education, and
            consistently supports girl child education and menstrual hygiene
            awareness.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            Kamala Trust is also known for organizing large-scale social
            initiatives like{" "}
            <Typography
              component="span"
              sx={{ color: "#c77b30", fontWeight: 500 }}
            >
              Kamala Power Women
            </Typography>
            ,{" "}
            <Typography
              component="span"
              sx={{ color: "#c77b30", fontWeight: 500 }}
            >
              Kamala Rising Stars
            </Typography>
            , and{" "}
            <Typography
              component="span"
              sx={{ color: "#c77b30", fontWeight: 500 }}
            >
              Kamala Cricket Tournament
            </Typography>
            , celebrating and recognizing individuals who have contributed to
            society—be it COVID warriors, transgenders, acid attack survivors,
            or armed forces widows. Additionally, they've taken significant
            strides in supporting cancer patients, organizing HPV vaccinations,
            promoting self-employment, and uplifting sex workers and transgender
            individuals through inclusive celebrations and skill-building.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            Under the visionary leadership of Nidarshana Gowani, the trust
            continues to impact lives at the grassroots through sustainable and
            compassionate outreach programs, making it a pillar of support and
            hope for many across India.
          </Typography>
        </Box>
      </Box>

      {/* Founders Section */}
      <Box className="trust-founders-section">
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
          Leadership
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mb: 6,
            textAlign: "center",
          }}
        >
          Founder and Trustees
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Nidarshana Gowani */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="founder-card">
              <Box className="founder-image-wrapper">
                <Box className="founder-image-placeholder">
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "3rem",
                      color: "#c77b30",
                    }}
                  >
                    NG
                  </Typography>
                </Box>
              </Box>
              <CardContent className="founder-content">
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 1,
                  }}
                >
                  Smt. Nidarshana Gowani
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.85rem",
                    color: "#c77b30",
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  Founder & Managing Director
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  Nidarshana Gowani is a dynamic Indian business leader,
                  philanthropist, and social entrepreneur whose work spans
                  industries and communities. As Managing Director of the Kamala
                  Group of Industries, she has made significant strides in
                  male-dominated sectors like real estate, power, and
                  manufacturing, challenging gender norms and inspiring future
                  women leaders.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.8,
                    mt: 2,
                  }}
                >
                  She leads two major philanthropic institutions—Kamala Ankibai
                  Ghamandiram Gowani Trust and Ankibai Ghamandiram Gowani
                  Trust—impacting lives through initiatives in education,
                  healthcare, and empowerment. Her work with marginalized
                  groups, including transgender individuals, sex workers, and
                  war widows, reflects her dignity-driven, inclusive approach.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.8,
                    mt: 2,
                  }}
                >
                  Through programs like Kamala Power Women, Kamala Rising Star,
                  and Pillar of Humanity, she honors changemakers and nurtures
                  young talent. Her ventures, Vanvaas and Multiverse
                  Entertainment, bridge culture and commerce. Rooted in a legacy
                  of public service, Nidarshana continues to redefine leadership
                  through compassion, innovation, and social
                  responsibility—leaving a lasting impact on India's corporate
                  and humanitarian landscape.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Ramesh Gowani */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="founder-card">
              <Box className="founder-image-wrapper">
                <Box className="founder-image-placeholder">
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "3rem",
                      color: "#c77b30",
                    }}
                  >
                    RG
                  </Typography>
                </Box>
              </Box>
              <CardContent className="founder-content">
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 1,
                  }}
                >
                  Shri Ramesh Gowani
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.85rem",
                    color: "#c77b30",
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  Trustee
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  Ramesh Gowani is a seasoned Indian businessman known for his
                  transformative work in real estate, renewable energy, and
                  philanthropy. Born on July 3, 1963, into the respected Gowani
                  industrialist family, he began his entrepreneurial journey
                  with ventures like La Papilo, later transforming Kamala Mills
                  into one of Mumbai's leading commercial and hospitality
                  destinations.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.8,
                    mt: 2,
                  }}
                >
                  A visionary in sustainable development, Gowani pioneered
                  biomass power plants in Karnataka and Punjab, promoting green
                  energy through zero-waste models. His innovative approach
                  integrates renewable energy with cold storage and industrial
                  sustainability.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.8,
                    mt: 2,
                  }}
                >
                  As a trustee of the Ankibai Ghamandiram Gowani Trust, he
                  supports initiatives in healthcare, education, and social
                  inclusion. Despite maintaining a low profile, Ramesh is
                  respected for his quiet leadership, calculated risk-taking,
                  and commitment to impactful ventures. Supported by his wife,
                  Nidarshana Gowani, and family, Ramesh continues to influence
                  India's business landscape through foresight, financial
                  discipline, and a strong sense of social responsibility.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Impact Stats */}
      <Box className="trust-impact-section">
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#f5efe3",
            mb: 5,
            textAlign: "center",
          }}
        >
          Our Areas of Impact
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: "📚", label: "Education" },
            { icon: "🏥", label: "Healthcare" },
            { icon: "♀️", label: "Gender Equality" },
            { icon: "🌾", label: "Rural Upliftment" },
            { icon: "🤝", label: "Social Empowerment" },
            { icon: "🆘", label: "Disaster Relief" },
          ].map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Box className="impact-item">
                <Typography sx={{ fontSize: "2.5rem", mb: 1 }}>
                  {item.icon}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.9rem",
                    color: "rgba(245, 239, 227, 0.9)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutKamalaTrust;
