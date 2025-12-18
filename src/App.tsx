import { Routes, Route, useNavigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import ConfirmModal from "./components/ConfirmModal";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AllArtworks from "./pages/AllArtworks";
import Categories from "./pages/Categories";
import Artists from "./pages/Artists";
import MeetOurArtists from "./pages/MeetOurArtists";
import StoriesOfCraft from "./pages/StoriesOfCraft";
import AboutVanvaas from "./pages/AboutVanvaas";
import AboutKamalaTrust from "./pages/AboutKamalaTrust";
import HowYourPurchaseHelps from "./pages/HowYourPurchaseHelps";
import ArtisanEmpowerment from "./pages/ArtisanEmpowerment";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import ProductDetail from "./pages/ProductDetail";
import ArtisanDetail from "./pages/ArtisanDetail";

const SplashRoute = () => {
  const navigate = useNavigate();
  return (
    <SplashScreen
      // duration={3000}
      onComplete={() => {
        navigate("/login");
      }}
    />
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/all-artworks" element={<AllArtworks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/meet-our-artists" element={<MeetOurArtists />} />
        <Route path="/stories-of-craft" element={<StoriesOfCraft />} />
        <Route path="/about-vanvaas" element={<AboutVanvaas />} />
        <Route path="/about-kamala-trust" element={<AboutKamalaTrust />} />
        <Route
          path="/how-your-purchase-helps"
          element={<HowYourPurchaseHelps />}
        />
        <Route path="/artisan-empowerment" element={<ArtisanEmpowerment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/artisan/:id" element={<ArtisanDetail />} />
      </Routes>
      <ConfirmModal />
    </>
  );
}

export default App;
