import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { type RootState } from "../../store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  type CartItem,
} from "../../store/cartSlice";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Auto redirect after order success
  useEffect(() => {
    if (orderSuccess) {
      const timer = setTimeout(() => {
        dispatch(clearCart());
        setOrderSuccess(false);
        navigate("/shop");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [orderSuccess, navigate, dispatch]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  if (cartItems.length === 0) {
    return (
      <Box className="cart-page">
        <Header />
        <Box className="cart-empty">
          <svg className="empty-cart-icon" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#c77b30"
              strokeWidth="2"
              strokeOpacity="0.3"
            />
            <path
              d="M30 40 L70 40 L65 70 L35 70 Z"
              fill="none"
              stroke="#c77b30"
              strokeWidth="2"
              strokeOpacity="0.5"
            />
            <path
              d="M40 40 L40 30 Q50 20 60 30 L60 40"
              fill="none"
              stroke="#c77b30"
              strokeWidth="2"
              strokeOpacity="0.5"
            />
          </svg>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: "#1b1b1b",
              mb: 2,
              mt: 3,
            }}
          >
            Your Cart is Empty
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              color: "#666",
              mb: 1,
            }}
          >
            आपकी टोकरी खाली है।
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              color: "#888",
              mb: 4,
              fontStyle: "italic",
            }}
          >
            Discover unique artisan creations and fill your cart with purpose.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/shop")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1rem",
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "#c77b30",
              textTransform: "none",
              padding: "14px 40px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#a66628",
              },
            }}
          >
            Explore Shop
          </Button>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box className="cart-page">
      <Header />

      {/* Hero Section */}
      <Box className="cart-hero">
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "#c77b30",
          }}
        >
          Your Selection
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 500,
            color: "#1b1b1b",
            mt: 1,
          }}
        >
          Shopping Cart
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.95rem",
            color: "#666",
            mt: 1,
          }}
        >
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your
          cart
        </Typography>
      </Box>

      {/* Cart Content */}
      <Box className="cart-content">
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box className="cart-items-section">
              {cartItems.map((item: CartItem) => (
                <Box key={item.product.id} className="cart-item">
                  <Box
                    className="cart-item-image"
                    onClick={() => navigate(`/product/${item.product.id}`)}
                  >
                    <img src={item.product.image} alt={item.product.name} />
                  </Box>

                  <Box className="cart-item-details">
                    <Box className="cart-item-header">
                      <Box>
                        <Typography
                          className="cart-item-name"
                          onClick={() =>
                            navigate(`/product/${item.product.id}`)
                          }
                          sx={{
                            fontFamily: '"Playfair Display", Georgia, serif',
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            color: "#1b1b1b",
                            cursor: "pointer",
                            "&:hover": { color: "#c77b30" },
                          }}
                        >
                          {item.product.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: "0.85rem",
                            color: "#888",
                            mt: 0.5,
                          }}
                        >
                          By {item.product.artisan}
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="remove-btn"
                        sx={{ color: "#c75050" }}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Box>

                    <Box className="cart-item-meta">
                      <Typography
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: "0.8rem",
                          color: "#666",
                        }}
                      >
                        {item.product.category} • {item.product.craftType}
                      </Typography>
                    </Box>

                    <Box className="cart-item-footer">
                      <Box className="quantity-controls">
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: "1rem",
                            fontWeight: 500,
                            mx: 2,
                            minWidth: "30px",
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          disabled={item.quantity >= item.product.stockCount}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "#1b1b1b",
                        }}
                      >
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}

              <Box className="cart-actions">
                <Button
                  variant="text"
                  onClick={() => dispatch(clearCart())}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    color: "#c75050",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(199, 80, 80, 0.08)",
                    },
                  }}
                >
                  Clear Cart
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/shop")}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    color: "#8b5a2b",
                    borderColor: "#8b5a2b",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(139, 90, 43, 0.08)",
                      borderColor: "#8b5a2b",
                    },
                  }}
                >
                  Continue Shopping
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Order Summary */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box className="order-summary">
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "#1b1b1b",
                  mb: 3,
                }}
              >
                Order Summary
              </Typography>

              <Box className="summary-row">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#666",
                  }}
                >
                  Subtotal
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#1b1b1b",
                  }}
                >
                  ₹{subtotal.toLocaleString()}
                </Typography>
              </Box>

              <Box className="summary-row">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: "#666",
                  }}
                >
                  Shipping
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                    color: shipping === 0 ? "#4a7c4e" : "#1b1b1b",
                  }}
                >
                  {shipping === 0 ? "Free" : `₹${shipping}`}
                </Typography>
              </Box>

              {shipping > 0 && (
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.8rem",
                    color: "#888",
                    fontStyle: "italic",
                    mb: 2,
                  }}
                >
                  Add ₹{(1000 - subtotal).toLocaleString()} more for free
                  shipping
                </Typography>
              )}

              <Divider sx={{ my: 2 }} />

              <Box className="summary-row total">
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#1b1b1b",
                  }}
                >
                  Total
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#c77b30",
                  }}
                >
                  ₹{total.toLocaleString()}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  setOrderSuccess(true);
                }}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#fff",
                  backgroundColor: "#c77b30",
                  textTransform: "none",
                  padding: "14px 32px",
                  borderRadius: "4px",
                  mt: 3,
                  "&:hover": {
                    backgroundColor: "#a66628",
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>

            {/* Impact Note */}
            <Box className="impact-note">
              <Typography
                sx={{
                  fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                  fontSize: "0.9rem",
                  color: "#555",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                आपकी हर खरीद एक कारीगर परिवार को सशक्त बनाती है।
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.85rem",
                  color: "#888",
                  fontStyle: "italic",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                Every purchase empowers an artisan family.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />

      {/* Order Success Full Screen */}
      {orderSuccess && (
        <Box className="order-success-screen">
          <Box className="order-success-content">
            <Box className="success-icon-wrapper">
              <svg className="success-checkmark" viewBox="0 0 100 100">
                <circle
                  className="checkmark-circle"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#4a7c4e"
                  strokeWidth="3"
                />
                <path
                  className="checkmark-check"
                  fill="none"
                  stroke="#4a7c4e"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M30 50 L45 65 L70 35"
                />
              </svg>
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 500,
                color: "#1b1b1b",
                mb: 2,
                animation: "fadeInUp 0.6s ease 0.3s forwards",
                opacity: 0,
              }}
            >
              Order Placed Successfully!
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                color: "#c77b30",
                mb: 1,
                animation: "fadeInUp 0.6s ease 0.5s forwards",
                opacity: 0,
              }}
            >
              आपका ऑर्डर सफलतापूर्वक प्लेस हो गया है।
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                color: "#666",
                mb: 2,
                animation: "fadeInUp 0.6s ease 0.7s forwards",
                opacity: 0,
              }}
            >
              Thank you for supporting our artisans!
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "0.9rem",
                color: "#888",
                mb: 4,
                animation: "fadeInUp 0.6s ease 0.9s forwards",
                opacity: 0,
              }}
            >
              Redirecting to shop...
            </Typography>

            <Box
              sx={{
                animation: "fadeInUp 0.6s ease 1.1s forwards",
                opacity: 0,
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(clearCart());
                  setOrderSuccess(false);
                  navigate("/shop");
                }}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#fff",
                  backgroundColor: "#c77b30",
                  textTransform: "none",
                  padding: "14px 40px",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#a66628",
                  },
                }}
              >
                Continue Shopping
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
