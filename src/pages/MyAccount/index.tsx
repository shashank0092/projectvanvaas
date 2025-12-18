import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { type RootState } from "../../store";
import "./MyAccount.css";

const MyAccount = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  if (!isAuthenticated || !user) {
    return (
      <Box className="my-account-page">
        <Header />
        <Box className="account-not-logged-in">
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: "#1b1b1b",
              mb: 2,
            }}
          >
            Please Login
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              color: "#666",
              mb: 3,
            }}
          >
            You need to login to view your account details.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              backgroundColor: "#c77b30",
              "&:hover": { backgroundColor: "#a66628" },
            }}
          >
            Login
          </Button>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box className="my-account-page">
      <Header />

      {/* Hero Section */}
      <Box className="account-hero">
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "#c77b30",
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mt: 1,
          }}
        >
          My Account
        </Typography>
      </Box>

      {/* Account Content */}
      <Box className="account-content">
        <Grid container spacing={4}>
          {/* Profile Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="profile-card">
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 4,
                }}
              >
                <Avatar
                  src={user.picture}
                  alt={user.name}
                  sx={{
                    width: 120,
                    height: 120,
                    border: "4px solid rgba(199, 123, 48, 0.3)",
                    mb: 3,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#666",
                    textAlign: "center",
                  }}
                >
                  {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Account Details */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card className="details-card">
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 4,
                  }}
                >
                  Account Details
                </Typography>

                <Box className="detail-row">
                  <Typography className="detail-label">Full Name</Typography>
                  <Typography className="detail-value">{user.name}</Typography>
                </Box>

                <Box className="detail-row">
                  <Typography className="detail-label">
                    Email Address
                  </Typography>
                  <Typography className="detail-value">{user.email}</Typography>
                </Box>

                <Box className="detail-row">
                  <Typography className="detail-label">Account Type</Typography>
                  <Typography className="detail-value">
                    Google Account
                  </Typography>
                </Box>

                <Box className="detail-row">
                  <Typography className="detail-label">Member Since</Typography>
                  <Typography className="detail-value">
                    {new Date().toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                    })}
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="actions-card">
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 500,
                    color: "#1b1b1b",
                    mb: 3,
                  }}
                >
                  Quick Actions
                </Typography>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => navigate("/shop")}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        color: "#8b5a2b",
                        borderColor: "#8b5a2b",
                        textTransform: "none",
                        padding: "12px 24px",
                        "&:hover": {
                          backgroundColor: "rgba(139, 90, 43, 0.08)",
                          borderColor: "#8b5a2b",
                        },
                      }}
                    >
                      🛍️ Continue Shopping
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => navigate("/cart")}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        color: "#8b5a2b",
                        borderColor: "#8b5a2b",
                        textTransform: "none",
                        padding: "12px 24px",
                        "&:hover": {
                          backgroundColor: "rgba(139, 90, 43, 0.08)",
                          borderColor: "#8b5a2b",
                        },
                      }}
                    >
                      🛒 View Cart
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => navigate("/artists")}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        color: "#8b5a2b",
                        borderColor: "#8b5a2b",
                        textTransform: "none",
                        padding: "12px 24px",
                        "&:hover": {
                          backgroundColor: "rgba(139, 90, 43, 0.08)",
                          borderColor: "#8b5a2b",
                        },
                      }}
                    >
                      👨‍🎨 Meet Artisans
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => navigate("/contact")}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        color: "#8b5a2b",
                        borderColor: "#8b5a2b",
                        textTransform: "none",
                        padding: "12px 24px",
                        "&:hover": {
                          backgroundColor: "rgba(139, 90, 43, 0.08)",
                          borderColor: "#8b5a2b",
                        },
                      }}
                    >
                      📞 Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Impact Note */}
      <Box className="account-impact-note">
        <Typography
          sx={{
            fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
            fontSize: "1rem",
            color: "#c77b30",
            textAlign: "center",
          }}
        >
          आपके समर्थन से कारीगरों के जीवन में बदलाव आ रहा है।
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.9rem",
            color: "#666",
            fontStyle: "italic",
            textAlign: "center",
            mt: 1,
          }}
        >
          Your support is transforming artisan lives.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default MyAccount;
