import PropTypes from "prop-types";
import classes from "./styles.module.css";
import classNames from "classnames";
import { ChartComponent } from "../Chart/index";

export function Card({
  name,
  level,
  dscr = "",
  cnt = 0,
  link,
  data_succses,
  data_eror,
}) {
  return (
    <a href={link}>
      <div
        className={classNames(
          classes.card,
          level == "i" ? classes.status_ok : "",
          level == "w" ? classes.status_warning : "",
          level == "e" ? classes.status_error : ""
        )}
      >
        <div className={classes.card_header}>{name}</div>
        <div className={classes.card_text}>{dscr}</div>
        <div className={classes.card_count} title="Кол-во запросов">
          {cnt}
        </div>
        <div className={classes.card_chart}>
          <ChartComponent
            data_succses={data_succses}
            data_eror={data_eror}
            isfull={false}
          />
        </div>
      </div>
    </a>
  );
}

export function CardMini({ name, level, dscr = "", cnt = 0, link }) {
  return (
    <a href={link}>
      <div
        className={classNames(
          classes.cardMini,
          level == "i" ? classes.status_ok : "",
          level == "w" ? classes.status_warning : "",
          level == "e" ? classes.status_error : ""
        )}
      >
        <div className={classes.card_header}>{name}</div>
        <div className={classes.card_text}>{dscr}</div>
        <div className={classes.card_count} title="Кол-во запросов">
          {cnt}
        </div>
      </div>
    </a>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  dscr: PropTypes.string,
  cnt: PropTypes.number,
};
