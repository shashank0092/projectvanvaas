import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Chip,
  IconButton,
  Collapse,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../data/products";
import "./Shop.css";

const Shop = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [category, setCategory] = useState("");
  const [craftType, setCraftType] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const clearFilters = () => {
    setCategory("");
    setCraftType("");
    setPriceRange([0, 10000]);
    setSortBy("featured");
  };

  const filterContent = (
    <Box className="filter-content">
      {/* Category Filter */}
      <FormControl fullWidth size="small" className="filter-select">
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="textile">Textile</MenuItem>
          <MenuItem value="clay">Clay & Pottery</MenuItem>
          <MenuItem value="wood">Wood Craft</MenuItem>
          <MenuItem value="paintings">Paintings</MenuItem>
          <MenuItem value="metal">Metal Work</MenuItem>
        </Select>
      </FormControl>

      {/* Craft Type Filter */}
      <FormControl fullWidth size="small" className="filter-select">
        <InputLabel>Craft Type</InputLabel>
        <Select
          value={craftType}
          label="Craft Type"
          onChange={(e) => setCraftType(e.target.value)}
        >
          <MenuItem value="">All Types</MenuItem>
          <MenuItem value="handwoven">Handwoven</MenuItem>
          <MenuItem value="handpainted">Hand Painted</MenuItem>
          <MenuItem value="carved">Carved</MenuItem>
          <MenuItem value="molded">Molded</MenuItem>
        </Select>
      </FormControl>

      {/* Price Range */}
      <Box className="price-filter">
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.85rem",
            color: "#1b1b1b",
            mb: 1,
          }}
        >
          Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
          step={100}
          sx={{
            color: "#c77b30",
            "& .MuiSlider-thumb": {
              backgroundColor: "#c77b30",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#c77b30",
            },
          }}
        />
      </Box>

      {/* Clear Filters */}
      <Button
        variant="text"
        onClick={clearFilters}
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "0.8rem",
          color: "#8b5a2b",
          textTransform: "none",
          mt: 1,
          "&:hover": {
            backgroundColor: "rgba(139, 90, 43, 0.08)",
          },
        }}
      >
        Clear All Filters
      </Button>
    </Box>
  );

  return (
    <Box className="shop-page">
      <Header />

      {/* SECTION 1: SHOP HERO */}
      <Box className="shop-hero">
        <Box className="shop-hero-overlay" />
        <svg
          className="shop-hero-illustration"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5efe3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c77b30" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g stroke="url(#heroGrad)" fill="none" strokeWidth="0.8">
            <path d="M100 300 L100 200 Q80 180 90 150 Q100 130 110 150 Q120 180 100 200" />
            <path
              d="M150 300 L150 220 Q135 200 145 175 Q155 160 165 175 Q175 200 150 220"
              strokeOpacity="0.7"
            />
            <path d="M850 300 L850 200 Q870 180 860 150 Q850 130 840 150 Q830 180 850 200" />
            <path
              d="M900 300 L900 220 Q915 200 905 175 Q895 160 885 175 Q875 200 900 220"
              strokeOpacity="0.7"
            />
            <circle cx="500" cy="200" r="60" strokeOpacity="0.3" />
            <circle cx="500" cy="200" r="45" strokeOpacity="0.2" />
          </g>
        </svg>

        <Box className="shop-hero-content">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "0.7rem", md: "0.8rem" },
              letterSpacing: "0.3em",
              color: "#c77b30",
              mb: 2,
            }}
          >
            Artisan Marketplace
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 500,
              color: "#f5efe3",
              mb: 2,
            }}
          >
            Shop with Purpose
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "rgba(245, 239, 227, 0.85)",
              mb: 4,
              maxWidth: "600px",
            }}
          >
            हर खरीद किसी कारीगर के जीवन को सशक्त बनाती है।
          </Typography>

          <Button
            variant="contained"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#1b1b1b",
              backgroundColor: "#c77b30",
              textTransform: "none",
              padding: "12px 32px",
              borderRadius: "4px",
              boxShadow: "0 4px 15px rgba(199, 123, 48, 0.3)",
              "&:hover": {
                backgroundColor: "#a66628",
                transform: "translateY(-2px)",
              },
            }}
          >
            Explore Creations
          </Button>
        </Box>
      </Box>

      {/* SECTION 2: FILTERS & SORT */}
      <Box className="shop-filters-section" id="products">
        <Box className="filters-container">
          {/* Desktop Filters */}
          {!isMobile && (
            <Box className="desktop-filters">
              <Button
                startIcon={<FilterListIcon />}
                onClick={() => setFilterOpen(!filterOpen)}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  color: "#1b1b1b",
                  textTransform: "none",
                  borderColor: "rgba(27, 27, 27, 0.2)",
                  "&:hover": {
                    borderColor: "#c77b30",
                  },
                }}
                variant="outlined"
              >
                Filters
              </Button>

              <Collapse in={filterOpen} timeout="auto">
                <Box className="filter-panel">{filterContent}</Box>
              </Collapse>
            </Box>
          )}

          {/* Mobile Filter Button */}
          {isMobile && (
            <Button
              startIcon={<FilterListIcon />}
              onClick={() => setMobileFilterOpen(true)}
              sx={{
                fontFamily: '"Poppins", sans-serif',
                color: "#1b1b1b",
                textTransform: "none",
              }}
              variant="outlined"
            >
              Filters
            </Button>
          )}

          {/* Sort Dropdown */}
          <FormControl size="small" className="sort-select">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Active Filters */}
        {(category || craftType) && (
          <Box className="active-filters">
            {category && (
              <Chip
                label={category}
                onDelete={() => setCategory("")}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  backgroundColor: "rgba(199, 123, 48, 0.1)",
                  color: "#8b5a2b",
                }}
              />
            )}
            {craftType && (
              <Chip
                label={craftType}
                onDelete={() => setCraftType("")}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  backgroundColor: "rgba(199, 123, 48, 0.1)",
                  color: "#8b5a2b",
                }}
              />
            )}
          </Box>
        )}
      </Box>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="left"
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
      >
        <Box className="mobile-filter-drawer">
          <Box className="drawer-header">
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            >
              Filters
            </Typography>
            <IconButton onClick={() => setMobileFilterOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {filterContent}
        </Box>
      </Drawer>

      {/* SECTION 3: PRODUCT GRID */}
      <Box className="shop-products-section">
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card className="product-card">
                <Box className="product-image-wrapper">
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <Chip
                    label={product.badge}
                    className="product-badge"
                    size="small"
                  />
                </Box>
                <CardContent className="product-content">
                  <Typography
                    className="product-name"
                    sx={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#1b1b1b",
                      mb: 0.5,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    className="product-artisan"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      color: "#8b5a2b",
                      mb: 1,
                    }}
                  >
                    by {product.artisan}
                  </Typography>
                  <Typography
                    className="product-price"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#1b1b1b",
                      mb: 2,
                    }}
                  >
                    ₹{product.price.toLocaleString()}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate(`/product/${product.id}`)}
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "0.85rem",
                      color: "#8b5a2b",
                      borderColor: "#8b5a2b",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#8b5a2b",
                        color: "#fff",
                        borderColor: "#8b5a2b",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SECTION 4: ARTISAN CONTEXT STRIP */}
      <Box className="artisan-strip">
        <Box className="artisan-strip-content">
          <Typography
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontWeight: 500,
              color: "#1b1b1b",
              mb: 1,
            }}
          >
            Meet the Artisan Behind the Craft
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: "#8b5a2b",
              mb: 2,
            }}
          >
            इस कला के पीछे एक जीवन और एक कहानी है।
          </Typography>
          <Button
            variant="text"
            onClick={() => navigate("/meet-our-artists")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.9rem",
              color: "#c77b30",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(199, 123, 48, 0.08)",
              },
            }}
          >
            Meet Our Artists →
          </Button>
        </Box>
      </Box>

      {/* SECTION 6: IMPACT CALLOUT */}
      <Box className="impact-callout">
        <Box className="impact-callout-content">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "#c77b30",
              mb: 1,
            }}
          >
            Your Purchase Helps
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", "Noto Sans Devanagari", sans-serif',
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "#1b1b1b",
              mb: 2,
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            इस खरीद से कारीगर को सम्मानजनक आजीविका मिलती है।
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate("/how-your-purchase-helps")}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.85rem",
              color: "#8b5a2b",
              borderColor: "#8b5a2b",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#8b5a2b",
                color: "#fff",
              },
            }}
          >
            Learn How
          </Button>
        </Box>
      </Box>

      {/* SECTION 9: BOTTOM CTA */}
      <Box className="bottom-cta">
        <Typography
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#f5efe3",
            mb: 3,
          }}
        >
          Explore the Stories Before You Buy
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/stories-of-craft")}
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#1b1b1b",
            backgroundColor: "#c77b30",
            textTransform: "none",
            padding: "12px 32px",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#a66628",
              transform: "translateY(-2px)",
            },
          }}
        >
          Stories of Craft
        </Button>
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
};

export default Shop;
