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
    margin: 2,
    borderRadius: 25
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
  reference_system: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },

  payload_id: {
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
    backgroundColor: "#f5efeb"
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
    color: theme.palette.primary.main,
    fontWeight: "bold"
  }
});

class CardComponent extends Component {
  render() {
    const { classes, payload_id, nationality, manufacturer, reference_system, regime, caption, text, actionLink } = this.props;

    // item.payload_id
    // item.nationality
    // item.manufacturer
    // item.orbit_params.reference_system
    // item.orbit_params.regime


    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <div className={classes.cardText}>
            <Typography
              variant="caption"
              className={classes.caption}
              gutterBottom
            >
              {caption}
            </Typography>
            <Typography variant="h4" className={classes.manufacturer} gutterBottom>
              Manufacturer : {manufacturer}
            </Typography>
            <Typography variant="body1">{text}</Typography>
            <Typography variant="h5" className={classes.payload_id} gutterBottom>
              Payload ID :  {payload_id}
            </Typography>
            <Typography variant="h6" className={classes.payload_id} gutterBottom>
              Nationality : {nationality}
            </Typography>

          </div>
          {/* <CardActions style={{ padding: 0 }}> */}
          <Typography variant="body1" className={classes.reference_system} gutterBottom>
            Reference System : {reference_system}
          </Typography>
          {/* </CardActions> */}
        </CardContent>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);