import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core/";

const ArticleModal = ({
  setOpen,
  title,
  open,
  paragraphs,
}: ArticleModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Dialog onClose={handleClose} aria-labelledby={title} open={open}>
      <DialogTitle>{title}</DialogTitle>
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
        <Button autoFocus onClick={handleClose} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface ArticleModalProps {
  open: boolean;
  title: string;
  paragraphs: Array<string>;
  setOpen: (arg0: boolean) => void;
  onClose: () => void;
}

export default ArticleModal;
