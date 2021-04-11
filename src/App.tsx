import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ArticleCard from "./components/Card/ArticleCard";
import siteData from "./siteData";
import { Grid, CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
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
