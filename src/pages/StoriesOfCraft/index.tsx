import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const StoriesOfCraft = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Stories of Craft
        </Typography>
        <Typography variant="body1" paragraph>
          Emotional trust builder - Stories of Craft page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default StoriesOfCraft;
