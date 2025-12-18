import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const MeetOurArtists = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Meet Our Artists
        </Typography>
        <Typography variant="body1" paragraph>
          Meet Our Artists page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default MeetOurArtists;
