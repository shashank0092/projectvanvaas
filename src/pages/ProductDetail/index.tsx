import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Grid,
  Tabs,
  Tab,
  Chip,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getProductById } from "../../data/products";
import { addToCart } from "../../store/cartSlice";
import "./ProductDetail.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <Box className="product-detail-page">
        <Header />
        <Box className="product-not-found">
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: "#1b1b1b",
              mb: 2,
            }}
          >
            Product Not Found
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              color: "#666",
              mb: 3,
            }}
          >
            The product you are looking for does not exist.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/shop")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              backgroundColor: "#c77b30",
              "&:hover": { backgroundColor: "#a66628" },
            }}
          >
            Back to Shop
          </Button>
        </Box>
        <Footer />
      </Box>
    );
  }

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const increaseQuantity = () => {
    if (quantity < product.stockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ product, quantity }));
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate("/cart");
      }, 1000);
    }
  };

  return (
    <Box className="product-detail-page">
      <Header />

      {/* Breadcrumb */}
      <Box className="breadcrumb">
        <Typography
          component="span"
          onClick={() => navigate("/shop")}
          sx={{
            cursor: "pointer",
            color: "#8b5a2b",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Shop
        </Typography>
        <Typography component="span" sx={{ mx: 1, color: "#999" }}>
          /
        </Typography>
        <Typography component="span" sx={{ color: "#666" }}>
          {product.category}
        </Typography>
        <Typography component="span" sx={{ mx: 1, color: "#999" }}>
          /
        </Typography>
        <Typography component="span" sx={{ color: "#1b1b1b" }}>
          {product.name}
        </Typography>
      </Box>

      {/* Product Section */}
      <Box className="product-section">
        <Grid container spacing={6}>
          {/* Image Gallery */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="image-gallery">
              <Box className="main-image">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="product-main-img"
                />
                <Chip
                  label={product.badge}
                  className="product-badge"
                  size="small"
                />
              </Box>
              {product.images.length > 1 && (
                <Box className="thumbnail-row">
                  {product.images.map((img, index) => (
                    <Box
                      key={index}
                      className={`thumbnail ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>

          {/* Product Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="product-info">
              <Typography
                variant="overline"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  color: "#c77b30",
                }}
              >
                {product.category} • {product.craftType}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mt: 1,
                  mb: 2,
                }}
              >
                {product.name}
              </Typography>

              <Box className="price-section">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "#1b1b1b",
                  }}
                >
                  ₹{product.price.toLocaleString()}
                </Typography>
                {product.originalPrice && (
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "1.1rem",
                      color: "#999",
                      textDecoration: "line-through",
                      ml: 2,
                    }}
                  >
                    ₹{product.originalPrice.toLocaleString()}
                  </Typography>
                )}
              </Box>

              {/* Artisan Info */}
              <Box className="artisan-info">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#666",
                  }}
                >
                  Crafted by{" "}
                  <Typography
                    component="span"
                    onClick={() => navigate("/meet-our-artists")}
                    sx={{
                      color: "#8b5a2b",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {product.artisan}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.85rem",
                    color: "#888",
                    mt: 1,
                    fontStyle: "italic",
                  }}
                >
                  "{product.artisanStory.substring(0, 120)}..."
                </Typography>
              </Box>

              {/* Stock Status */}
              <Box className="stock-status">
                {product.inStock ? (
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      color: "#4a7c4e",
                    }}
                  >
                    ✓ In Stock ({product.stockCount} available)
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      color: "#c75050",
                    }}
                  >
                    Currently Unavailable
                  </Typography>
                )}
              </Box>

              {/* Quantity Selector */}
              <Box className="quantity-selector">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.9rem",
                    color: "#666",
                    mr: 2,
                  }}
                >
                  Quantity:
                </Typography>
                <Box className="quantity-controls">
                  <IconButton
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    size="small"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "1rem",
                      fontWeight: 500,
                      mx: 2,
                    }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stockCount}
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* CTA Buttons */}
              <Box className="cta-buttons">
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#fff",
                    backgroundColor: "#c77b30",
                    textTransform: "none",
                    padding: "14px 32px",
                    borderRadius: "4px",
                    mb: 2,
                    "&:hover": {
                      backgroundColor: "#a66628",
                    },
                    "&:disabled": {
                      backgroundColor: "#ccc",
                    },
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate("/meet-our-artists")}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#8b5a2b",
                    borderColor: "#8b5a2b",
                    textTransform: "none",
                    padding: "12px 32px",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "rgba(139, 90, 43, 0.08)",
                      borderColor: "#8b5a2b",
                    },
                  }}
                >
                  Support This Artisan
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Product Details Tabs */}
      <Box className="product-tabs-section">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          className="product-tabs"
          sx={{
            "& .MuiTab-root": {
              fontFamily: '"Poppins", sans-serif',
              textTransform: "none",
              fontSize: "0.95rem",
              color: "#666",
            },
            "& .Mui-selected": {
              color: "#c77b30 !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#c77b30",
            },
          }}
        >
          <Tab label="Description" />
          <Tab label="Craft & Materials" />
          <Tab label="Impact of Your Purchase" />
          <Tab label="Shipping & Care" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              color: "#444",
              lineHeight: 1.8,
            }}
          >
            {product.description}
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#1b1b1b",
              mb: 2,
            }}
          >
            Materials Used:
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {product.materials.map((material, index) => (
              <Typography
                component="li"
                key={index}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.95rem",
                  color: "#555",
                  mb: 1,
                }}
              >
                {material}
              </Typography>
            ))}
          </Box>
          {product.dimensions && (
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "0.95rem",
                color: "#555",
                mb: 1,
              }}
            >
              <strong>Dimensions:</strong> {product.dimensions}
            </Typography>
          )}
          {product.weight && (
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "0.95rem",
                color: "#555",
              }}
            >
              <strong>Weight:</strong> {product.weight}
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              color: "#444",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {product.impactStatement}
          </Typography>
          <Box className="impact-highlights">
            <Box className="impact-item">
              <Typography sx={{ fontSize: "1.5rem", mb: 1 }}>👨‍👩‍👧‍👦</Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  color: "#666",
                }}
              >
                Supports Artisan Families
              </Typography>
            </Box>
            <Box className="impact-item">
              <Typography sx={{ fontSize: "1.5rem", mb: 1 }}>🎨</Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  color: "#666",
                }}
              >
                Preserves Traditional Craft
              </Typography>
            </Box>
            <Box className="impact-item">
              <Typography sx={{ fontSize: "1.5rem", mb: 1 }}>🌱</Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  color: "#666",
                }}
              >
                Sustainable Livelihood
              </Typography>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#1b1b1b",
              mb: 2,
            }}
          >
            Care Instructions:
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {product.careInstructions}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#1b1b1b",
              mb: 2,
            }}
          >
            Shipping Information:
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: 1.8,
            }}
          >
            • Free shipping on orders above ₹999
            <br />
            • Delivery within 7-10 business days
            <br />
            • Carefully packaged to ensure safe delivery
            <br />• Easy returns within 7 days of delivery
          </Typography>
        </TabPanel>
      </Box>

      {/* Artisan Story Section */}
      <Box className="artisan-story-section">
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#c77b30",
          }}
        >
          The Artisan
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "1.8rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mt: 1,
            mb: 2,
          }}
        >
          Meet {product.artisan}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "1rem",
            color: "#555",
            lineHeight: 1.8,
            maxWidth: "700px",
            margin: "0 auto",
            mb: 3,
          }}
        >
          {product.artisanStory}
        </Typography>
        <Button
          variant="text"
          onClick={() => navigate("/meet-our-artists")}
          sx={{
            fontFamily: '"Poppins", sans-serif',
            color: "#c77b30",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(199, 123, 48, 0.08)",
            },
          }}
        >
          Read Full Story →
        </Button>
      </Box>

      <Footer />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Added to cart! Redirecting...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductDetail;
