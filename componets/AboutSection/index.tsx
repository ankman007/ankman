"use client";
import { FC, Fragment, useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = () => {

  const one = (
    <p>
      <Typography sx={{ marginTop: '10px'}}>
        I am a software engineer from Kathmandu, Nepal. I specialize in managing
        vast amounts of data and building interactive web solutions, with a track
        record of contributing to leading industry services and apps that have
        reached wide user base.
      </Typography>
    </p>
  );
  const two = (
    <p>
      I am currently working as Frontend Engineer at{" "}
      <a
        href="https://codesqad.com/"
        target="_blank"
        style={{
          color: "black",
          textDecoration: "none",
          borderBottom: "1px solid #899499",
        }}
      >
        CodeSQAD
      </a>
      . At the same time, I am also undertaking Bachelors in Information
      Management at{" "}
      <a
        href="https://www.nccs.edu.np/college"
        target="_blank"
        style={{
          color: "black",
          textDecoration: "none",
          borderBottom: "1px solid #899499",
        }}
      >
        National College Of Computer Studies
      </a>
      .
    </p>
  );

  return (
    <Container sx={{ marginBottom: "40px", marginTop: "30px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
        / about-me
      </Typography>
      <Typography variant="body1">{one}</Typography>
      <Typography variant="body1">{two}</Typography>
    </Container>
  );
};

export default AboutSection;
