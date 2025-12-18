import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSnackbar({
      open: true,
      message: "Thank you! Your message has been sent successfully.",
      severity: "success",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Box className="contact-page">
      <Header />

      {/* Hero Section */}
      <Box className="contact-hero">
        <Box className="contact-hero-overlay" />
        <svg
          className="contact-hero-illustration"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="contactHeroGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f5efe3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c77b30" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g stroke="url(#contactHeroGrad)" fill="none" strokeWidth="0.8">
            {/* Letter/envelope illustration */}
            <rect
              x="430"
              y="160"
              width="140"
              height="90"
              rx="5"
              strokeOpacity="0.3"
            />
            <path d="M430 165 L500 210 L570 165" strokeOpacity="0.25" />
            <circle cx="200" cy="200" r="40" strokeOpacity="0.15" />
            <circle cx="800" cy="200" r="40" strokeOpacity="0.15" />
          </g>
        </svg>

        <Box className="contact-hero-content">
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
            Get In Touch
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
            Contact Us
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
            हम आपकी बात सुनने के लिए उत्सुक हैं।
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
            We're eager to hear from you.
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="contact-main">
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box className="contact-form-section">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mb: 1,
                }}
              >
                Send Us a Message
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.95rem",
                  color: "#666",
                  mb: 4,
                }}
              >
                Fill out the form below and we'll get back to you within 24-48
                hours.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
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
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="contact-info-section">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mb: 4,
                }}
              >
                Contact Information
              </Typography>

              <Box className="contact-info-card">
                <Box className="info-item">
                  <Typography className="info-label">📍 Address</Typography>
                  <Typography className="info-value">
                    Kamala Ankibai Ghamandiram Gowani Trust
                    <br />
                    Mumbai, Maharashtra, India
                  </Typography>
                </Box>

                <Box className="info-item">
                  <Typography className="info-label">📧 Email</Typography>
                  <Typography className="info-value">
                    contact@vanvaas.in
                    <br />
                    support@vanvaas.in
                  </Typography>
                </Box>

                <Box className="info-item">
                  <Typography className="info-label">📞 Phone</Typography>
                  <Typography className="info-value">
                    +91 98765 43210
                    <br />
                    +91 98765 43211
                  </Typography>
                </Box>

                <Box className="info-item">
                  <Typography className="info-label">
                    🕐 Working Hours
                  </Typography>
                  <Typography className="info-value">
                    Monday - Saturday: 10:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>

              <Box className="trust-note">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                    fontSize: "0.9rem",
                    color: "#666",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  "An initiative by Kamala Ankibai Ghamandiram Gowani Trust,
                  dedicated to empowering artisans and preserving India's rich
                  craft heritage."
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
