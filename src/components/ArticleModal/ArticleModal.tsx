import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core/";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  dialog: {
    minHeight: "80vh",
    minWidth: "80vh",
    maxHeight: "80vh",
  },
  header: {
    display: "flex",
  },
  close: {
    alignSelf: "flex-end",
  },
  title: {
    alignSelf: "center",
  },
  headerContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
});

const ArticleModal = ({
  title,
  open,
  paragraphs,
  onClose,
}: ArticleModalProps) => {
  const classes = styles();
  const [review, setReview] = useState<string>();

  const thumbsUp = () => setReview("up");
  const thumbsDown = () => setReview("down");

  console.log("OPENING");

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby={title}
      open={open}
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle
        className={classes.header}
        classes={{ root: classes.headerContainer }}
      >
        {title}
      </DialogTitle>
      <DialogContent dividers>
        {paragraphs.map((paragraph, idx) => {
          return (
            <Typography gutterBottom key={idx}>
              {paragraph}
            </Typography>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={thumbsUp}
          color={review === "up" ? "primary" : "default"}
        >
          <ThumbUpAltIcon />
        </Button>
        <Button
          autoFocus
          onClick={thumbsDown}
          color={review === "down" ? "secondary" : "default"}
        >
          <ThumbDownAltIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface ArticleModalProps {
  open: boolean;
  title: string;
  paragraphs: Array<string>;
  onClose: () => void;
}

export default ArticleModal;
