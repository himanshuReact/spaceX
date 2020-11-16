import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "block",
    margin: 5,
    borderRadius: 0
  },

  caption: {
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
  },

  title: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },

  // media: {
  //   width: "auto",
  //   height: 300,
  //   [theme.breakpoints.up("sm")]: {
  //     width: 1500
  //   },
  //   flexBasis: "50%"
  // },

  content: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
    backgroundColor: "#eee"
  },

  cardText: {
    flex: "1 0 auto",
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0
    }
  },

  linkAction: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  }
});

class CardComponent extends Component {
  render() {
    const { classes, title, flight_number, caption, text, actionLink } = this.props;

    return (
      <Card className={classes.card}>
        {/* <CardMedia image={imageUrl} title="Flower" className={classes.media} /> */}
        <CardContent className={classes.content}>
          <div className={classes.cardText}>
            <Typography
              variant="h5"
              className={classes.caption}
              gutterBottom
            >
              {caption}
            </Typography>
            <Typography variant="h4" className={classes.title} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
            <Typography variant="h6" className={classes.title} gutterBottom>
              Flight Number:  {flight_number}
            </Typography>

          </div>
          <CardActions style={{ padding: 10 }}>
            <Typography variant="h5">
              <a href={actionLink} className={classes.linkAction}>
                <u>Click here to read more...</u>
              </a>
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);