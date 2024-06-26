import React from "react";
import { Typography, Link, Grid, Container } from "@mui/material";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "What Is Virtual Environment? - And Why Are They Useful?",
      postLink:
        "https://www.ankit-poudel.com.np/2023/10/virtual-enviroment.html",
      datePosted: "Oct 9, 2023",
    },
    {
      title: "What is REST API and why is it so popular?",
      postLink: "https://www.ankit-poudel.com.np/2023/10/rest-api.html",
      datePosted: "Oct 8, 2023",
    },
    {
      title: "Overview Of Cyber Law In Nepal",
      postLink:
        "https://www.ankit-poudel.com.np/2023/07/overview-of-cyber-law-in-nepal.html",
      datePosted: "July 8, 2023",
    },
    {
      title: "A Comprehensive Guide to E-Governance in Nepal",
      postLink:
        "https://www.ankit-poudel.com.np/2023/10/e-governance-in-nepal.html",
      datePosted: "Oct 8, 2023",
    },
    {
      title: "Understanding the Concept of Recursion",
      postLink:
        "https://ankman007.hashnode.dev/understanding-the-concept-of-recursion",
      datePosted: "Feb 12, 2023",
    },
    {
      title: "Four pillar of OOP in Java",
      postLink: "https://ankman007.hashnode.dev/four-pillar-of-oop-in-java",
      datePosted: "Sep 12, 2023",
    },
  ];

  const sortedPosts = blogPosts.slice().sort((a, b) => {
    const dateA = new Date(a.datePosted);
    const dateB = new Date(b.datePosted);

    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return 0;
    }

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Container sx={{ marginBottom: "40px", marginTop: "30px" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "15px" }}
      >
        / blogs
      </Typography>
      <Grid container spacing={2}>
  {sortedPosts.map((post, index) => (
    <Grid item xs={12} key={index}>
      <Typography
        variant="body1"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: 'column', // Change to column on small screens
            md: 'row'    // Maintain row on medium and large screens
          }
        }}
      >
        <Link
          href={post.postLink}
          target="_blank"
          rel="noopener"
          sx={{
            color: "black",
            textDecoration: "none",
            borderBottom: { xs: "none", md: "1px solid #899499" },
            marginBottom: { xs: 1, md: 0 }, // Add margin bottom only on small screens
          }}
        >
          {post.title}
        </Link>

        <span >{post.datePosted}</span>
      </Typography>
    </Grid>
  ))}
</Grid>

    </Container>
  );
};

export default BlogSection;
