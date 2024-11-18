import { Grid, Container, Typography } from "@mui/material";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

const ProjectSection = () => {
  const projects = {
    "todo-application": {
      desc: "A FastAPI-based Todo application that efficiently manages tasks with endpoints for creating, updating, retrieving, and deleting todos backed by a PostgreSQL database for reliable data storage and management.",
      techStack: "FastAPI, Postgres, Docker",
      projectLink: "https://github.com/ankman007/todo-app",
      deployedLink: "",
    },
    "cricket-statsguru": {
      desc: "Streamlit-based Nepali cricket visualization dashboard that utilizes python tools & libraries to display interactive charts & statistics",
      techStack: "Python, StreamLit, Pandas, Ploty, ",
      projectLink: "https://github.com/ankman007/cricket-statsguru",
      deployedLink: "https://cricket-statsguru.streamlit.app/",
    },
    "forest-footprints": {
      desc: "Uses satellite data & AI generated insights to help communities understand impacts of deforestation and encourages local conservation efforts.",
      techStack: "React, TypeScript, Django, Leaflet.js",
      projectLink: "https://github.com/ankman007/forest-footprints",
      deployedLink: "https://forest-footprints.vercel.app/",
    },
    "hamro-notepad": {
      desc: "Lightweight notes app to jot down your thoughts",
      techStack: "Flask, Bootstrap, SQL Alchemy, Werkzeug",
      projectLink: "https://github.com/ankman007/hamro-notepad",
      deployedLink: "https://hamro-notepad.onrender.com/",
    },
    "python-100-days-of-code": {
      desc: "Daily logs of my progress and mini-projects made over the course of this challenge",
      techStack: "Python, Flask, Numpy, Selenium, Tkinter",
      projectLink: "https://github.com/ankman007/Python-100-Days-of-Code",
      deployedLink: "",
    },
    "connectify": {
      desc: "Backend for social media app",
      techStack: "FastAPI, Postgres, Docker",
      projectLink: "https://github.com/ankman007/connectify",
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
