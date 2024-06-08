import { Grid, Container, Typography } from "@mui/material";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

const ProjectSection = () => {
  const projects = {
    "cricket-statsguru": {
      desc: "Streamlit-based Nepali cricket visualization dashboard that utilizes python tools & libraries to display interactive charts & statistics",
      techStack: "Python, StreamLit, Pandas, Ploty, ",
      projectLink: "https://github.com/ankman007/cricket-statsguru",
      deployedLink: "https://cricket-statsguru.streamlit.app/",
    },
    "gadget-gurkhas": {
      desc: "Next JS 14 based blog application that integrates several of NextJS's essential features",
      techStack: "Next JS, TypeScript, Tailwind, React",
      projectLink: "https://github.com/ankman007/next-ts-blog-application",
      deployedLink:
        "https://663659e5f6a8fe0ea0a63d38--guileless-eclair-e049d2.netlify.app/",
    },
    "mortgage-calculator": {
      desc: "Implemented in Java, designed to calculate your monthly mortgage payments & provide a detailed payment schedule for better financial planning.",
      techStack: "Java, OpenCSV",
      projectLink: "https://github.com/ankman007/Mortgage-Calculator",
      deployedLink: "",
    },
    "brg-travels": {
      desc: "Travel website implemented with SCSS & JQuery for interactive and user-friendly design",
      techStack: "JavaScript, SCSS, JQuery",
      projectLink: "https://github.com/ankman007/Travel-Website",
      deployedLink: "https://ankman007.github.io/Travel-Website",
    },
    "streamline-minds": {
      desc: "PHP, Bootstrap, and MySQL-powered blog website for productivity enthusiasts",
      techStack: "PHP, Bootstrap, CSS",
      projectLink: "https://github.com/ankman007/php-blogsite",
      deployedLink: "",
    },
    "python-100-days-of-code": {
      desc: "Daily logs of my progress and mini-projects made over the course of this challenge",
      techStack: "Python, Flask, Numpy, Selenium, Tkinter",
      projectLink: "https://github.com/ankman007/php-blogsite",
      deployedLink: "",
    },
  };

  return (
    <Container>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "15px" }}
      >
        / projects
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(projects).map(([projectId, projectInfo]) => (
          <Grid item xs={6} md={4} key={projectId}>
            <Typography variant="h6" gutterBottom>
              <a
                href={projectInfo.projectLink}
                target="_blank"
                style={{
                  color: "black",
                  textDecoration: "none",
                  borderBottom: "1px solid #899499",
                }}
              >
                {projectId}
              </a>
              <a href={projectInfo.deployedLink} target="_blank">
                {projectInfo.deployedLink ? (
                  <LaunchOutlinedIcon
                    style={{
                      fontSize: "small",
                      marginBottom: "-1px",
                      marginLeft: "4px",
                      color: "black",
                      textDecoration: "none",
                    }}
                  />
                ) : (
                  ""
                )}
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "black" }}>
              {projectInfo.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectSection;
