import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ArticleCard from "./components/Card/ArticleCard";
import siteData from "./siteData";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  articleHeader: {
    color: "#ffffff",
    textAlign: "center",
  },
});

const App = () => {
  const styles = useStyles();
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <Typography variant="h2" className={styles.articleHeader}>
        Blogs
      </Typography>
      <Grid container spacing={3}>
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
      </Grid>
    </>
  );
};

export default App;
