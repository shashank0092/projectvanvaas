import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const ArtisanEmpowerment = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Artisan Empowerment
        </Typography>
        <Typography variant="body1" paragraph>
          Artisan Empowerment page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default ArtisanEmpowerment;
