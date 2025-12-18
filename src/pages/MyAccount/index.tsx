import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const MyAccount = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          My Account
        </Typography>
        <Typography variant="body1" paragraph>
          My Account page content will go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default MyAccount;
