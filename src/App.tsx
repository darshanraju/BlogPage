import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ArticleCard from "./components/Card/ArticleCard";
import siteData from "./siteData";
import { Grid, CssBaseline, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const Fade = require("react-reveal/Fade");

const useStyles = makeStyles({
  articleHeader: {
    padding: "2rem",
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    width: "90vw",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    justifyItems: "flex-start",
  },
});

const GenerateBlogCards = () => {
  return (
    <Fade duration={800} bottom>
      {siteData.blogs.map((blog, idx) => (
        <ArticleCard
          key={idx}
          title={blog.title}
          shortDescription={blog.shortDescription}
          imagePath={blog.imagePath}
          authorName={blog.authorName}
          authorImagePath={blog.authorImagePath}
          publishedDate={blog.publishedDate}
          blogTextParagraphs={blog.blogTextParagraphs}
        />
      ))}
    </Fade>
  );
};

const App = () => {
  const styles = useStyles();
  const [content, setContent] = useState<content>("Blogs");

  const renderSwitch = () => {
    switch (content) {
      case "Blogs":
        return <GenerateBlogCards />;
      default:
        break;
    }
  };

  return (
    <>
      <CssBaseline />
      <Header changeContent={setContent} />
      <Hero />
      <Fade duration={800} up>
        <Typography variant="h2" className={styles.articleHeader}>
          {content}
        </Typography>
      </Fade>
      <Box className={styles.cardContainer}>{renderSwitch()}</Box>
    </>
  );
};

export type content = "Blogs" | "Podcasts" | "Math" | "Philosophy" | "Music";

export default App;
