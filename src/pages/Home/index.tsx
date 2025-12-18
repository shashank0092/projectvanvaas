import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import WhyWeExist from "./WhyWeExist";
import ArtisanStories from "./ArtisanStories";
import Collections from "./Collections";
import FeaturedCreations from "./FeaturedCreations";
import OurImpact from "./OurImpact";
import HowItWorks from "./HowItWorks";
import TrustSection from "./TrustSection";
import CallToAction from "./CallToAction";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const totalSections = 10;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll(".scroll-section");

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= totalSections || isScrolling.current) return;

      isScrolling.current = true;
      setCurrentSection(index);

      const targetSection = sections[index] as HTMLElement;

      // Animate to section
      gsap.to(container, {
        scrollTop: targetSection.offsetTop,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          setTimeout(() => {
            isScrolling.current = false;
          }, 100);
        },
      });

      // Animate section entry
      gsap.fromTo(
        targetSection,
        {
          opacity: 0.5,
          scale: 0.98,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        // Scroll down
        scrollToSection(currentSection + 1);
      } else {
        // Scroll up
        scrollToSection(currentSection - 1);
      }
    };

    // Touch support for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    // Keyboard support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection]);

  return (
    <Box className="home-page" ref={containerRef}>
      <Header />

      {/* Section Indicators */}
      <Box className="section-indicators">
        {[...Array(totalSections)].map((_, i) => (
          <Box
            key={i}
            className={`indicator ${currentSection === i ? "active" : ""}`}
            onClick={() => {
              if (!isScrolling.current) {
                const container = containerRef.current;
                const sections = container?.querySelectorAll(".scroll-section");
                if (sections && sections[i]) {
                  isScrolling.current = true;
                  setCurrentSection(i);
                  gsap.to(container, {
                    scrollTop: (sections[i] as HTMLElement).offsetTop,
                    duration: 1,
                    ease: "power3.inOut",
                    onComplete: () => {
                      setTimeout(() => {
                        isScrolling.current = false;
                      }, 100);
                    },
                  });
                }
              }
            }}
          />
        ))}
      </Box>

      <Box className="scroll-section">
        <HeroSection />
      </Box>

      <Box className="scroll-section">
        <WhyWeExist />
      </Box>

      <Box className="scroll-section">
        <ArtisanStories />
      </Box>

      <Box className="scroll-section">
        <Collections />
      </Box>

      <Box className="scroll-section">
        <FeaturedCreations />
      </Box>

      <Box className="scroll-section">
        <OurImpact />
      </Box>

      <Box className="scroll-section">
        <HowItWorks />
      </Box>

      <Box className="scroll-section">
        <TrustSection />
      </Box>

      <Box className="scroll-section">
        <CallToAction />
      </Box>

      <Box className="scroll-section footer-section">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
