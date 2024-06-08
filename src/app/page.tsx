"use client";
import { Container, Typography } from "@mui/material";
import AboutSection from "../../componets/AboutSection";
import ProjectSection from "../../componets/ProjectsSection";
import { Cursor } from "react-simple-typewriter";
import { FC, Fragment, useEffect, useState } from "react";
import BlogSection from "../../componets/BlogSection";
import Footer from "../../componets/Footer";

export default function Home() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCursor(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const text = (
    <span>
      hi, ankit here
      {showCursor && <Cursor />}
    </span>
  );

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography variant="h5" sx={{ marginLeft: "20px" }}>
        {text}
      </Typography>
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <Footer />
    </Container>
  );
}
