import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const Cart = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        <Typography variant="body1" paragraph>
          Your cart items will appear here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Cart;
