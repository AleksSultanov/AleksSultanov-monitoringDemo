import PropTypes from "prop-types";
import classes from "./styles.module.css";

// https://colorlib.com/polygon/gentelella/index.html

export function CaptionCard({ name, dscr }) {
  return (
    <>
      <div className={classes.captionbox}>
        <div className={classes.caption}>{name}</div>
        <div className={classes.text}>{dscr}</div>
      </div>
    </>
  );
}

CaptionCard.propTypes = {
  name: PropTypes.string,
  dscr: PropTypes.string,
};
