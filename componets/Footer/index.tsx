import { Typography, Link, Box, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Container sx={{ marginTop: "50px" }}>
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box>
          <Typography variant="body1">Ankit Poudel</Typography>
        </Box>
        <Box>
          <Link
            href="https://github.com/ankman007"
            sx={{ color: "inherit", marginRight: "10px" }}
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ankit-poudel007/"
            sx={{ color: "inherit", marginRight: "10px" }}
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://x.com/ankitpoudel_"
            sx={{ color: "inherit", marginRight: "10px" }}
            target="_blank"
            rel="noopener"
          >
            <XIcon />
          </Link>
          <Link
            href="mailto:info.ankitpoudel@gmail.com"
            sx={{ color: "inherit" }}
          >
            <MarkunreadIcon />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
