import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const AboutVanvaas = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Vanvaas
        </Typography>
        <Typography variant="body1" paragraph>
          About Vanvaas page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutVanvaas;
