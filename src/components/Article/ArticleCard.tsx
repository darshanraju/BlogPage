import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Box,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { blog } from "../../siteData";
import ArticleModal from "../ArticleModal/ArticleModal";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  card: {
    maxWidth: "100%",
    margin: "2rem",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  bookmark: {
    "&:hover": {
      color: "#d6462d",
      curser: "pointer",
    },
  },
  textContent: {
    flexWrap: "wrap",
  },
});

const ArticleCard = ({
  title,
  imagePath,
  shortDescription,
  authorImagePath,
  authorName,
  publishedDate,
  blogTextParagraphs,
}: blog) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={imagePath}
            title={title}
          />
          <CardContent className={classes.textContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={authorImagePath} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {authorName}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {publishedDate}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon className={classes.bookmark} />
          </Box>
        </CardActions>
      </Card>
      <ArticleModal
        title={title}
        paragraphs={blogTextParagraphs}
        open={openModal}
        onClose={handleClose}
      />
    </>
  );
};

export default ArticleCard;
