import { Box, Typography, Container } from "@mui/material";
import Header from "../../components/Header";

const Categories = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Categories
        </Typography>
        <Typography variant="body1" paragraph>
          Browse by categories: Textile, Clay, Wood, Paintings, and more.
        </Typography>
      </Container>
    </Box>
  );
};

export default Categories;
