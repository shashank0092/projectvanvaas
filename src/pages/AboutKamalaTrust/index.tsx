import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const AboutKamalaTrust = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Kamala Trust
        </Typography>
        <Typography variant="body1" paragraph>
          About Kamala Trust page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutKamalaTrust;
