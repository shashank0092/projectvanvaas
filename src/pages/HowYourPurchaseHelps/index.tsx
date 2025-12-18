import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const HowYourPurchaseHelps = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          How Your Purchase Helps
        </Typography>
        <Typography variant="body1" paragraph>
          How Your Purchase Helps page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default HowYourPurchaseHelps;
