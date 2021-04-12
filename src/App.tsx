import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ArticleCard from "./components/Article/ArticleCard";
import siteData, { content } from "./siteData";
import { CssBaseline, Typography, Box, Grid } from "@material-ui/core";
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

const GenerateCards = ({ content }: GenerateCardsProps) => {
  const toRender = siteData.blogs.filter((blog) => blog.topic === content);
  return (
    <>
      {toRender.length === 0 ? (
        <div>Empty</div>
      ) : (
        <Grid item xs={6} sm={3}>
          {toRender.map((blog, idx) => (
            <Fade duration={800} bottom>
              <ArticleCard
                key={idx}
                title={blog.title}
                shortDescription={blog.shortDescription}
                imagePath={blog.imagePath}
                authorName={blog.authorName}
                authorImagePath={blog.authorImagePath}
                publishedDate={blog.publishedDate}
                blogTextParagraphs={blog.blogTextParagraphs}
                topic={blog.topic}
              />
            </Fade>
          ))}
        </Grid>
      )}
    </>
  );
};

const App = () => {
  const styles = useStyles();
  const [content, setContent] = useState<content>("Math");

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
      <Box className={styles.cardContainer}>{GenerateCards({ content })}</Box>
    </>
  );
};

interface GenerateCardsProps {
  content: content;
}

export default App;
