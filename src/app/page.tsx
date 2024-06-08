"use client";
import { Container, Typography } from "@mui/material";
import AboutSection from "../../componets/AboutSection";
import ProjectSection from "../../componets/ProjectsSection";
import BlogSection from "../../componets/BlogSection";
import Footer from "../../componets/Footer";

export default function Home() {
  const text = (
    <Container sx={{ display: "inline-block" }}>
      <Typography
        variant="h5"
        sx={{
          position: "relative",
          display: "inline-block",
          maxWidth: "calc(100% - 40px)",
          borderRight: "1px solid",
          whiteSpace: "nowrap",
          overflow: "hidden",
          animation: "typing 2s linear, cursor .4s step-end infinite alternate",
          "@keyframes cursor": {
            "50%": { borderColor: "transparent" },
          },
        }}
      >
        hi, ankit here{" "}
      </Typography>
    </Container>
  );

  return (
    <Container sx={{ marginTop: "40px" }}>
      {text}
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <Footer />
    </Container>
  );
}
