import { Routes, Route, useNavigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
// import Login from "./pages/Login";

const Home = () => {
  return null;
};

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
    <Routes>
      <Route path="/" element={<SplashRoute />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
