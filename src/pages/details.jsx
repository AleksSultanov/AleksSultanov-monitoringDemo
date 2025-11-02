import classes from "./stylesDt.module.css";
import { infData } from "../data/infdata.jsx";
import { CaptionCard } from "../components/CaptionCard/index.jsx";
import { ChartComponent } from "../components/Chart/index.jsx";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

export function Detail() {
  const strlocation = useLocation();
  const prm = queryString.parse(strlocation.search);
  let map_obj = {};
  if (Object.keys(prm).includes("id")) {
    map_obj = infData.filter((data) => data.id + "" === prm.id + "");
  }
  console.log(map_obj);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.row}>
          <CaptionCard
            name="Дата и время последнего успешного ответа:"
            dscr={map_obj[0].sucsses_last_dt}
          />
          <CaptionCard
            name="Дата и время последнего ответа с ошибкой:"
            dscr={map_obj[0].error_last_dt}
          />
          {map_obj[0].error_tr_last_dt && (
            <CaptionCard
              name="Дата и время последнего ответа с транспорной ошибкой:"
              dscr={map_obj[0].error_tr_last_dt}
            />
          )}
          {map_obj[0].sucsses_proc_last_dt && (
            <CaptionCard
              name="Дата и время последнего успешно обработанного сообщения:"
              dscr={map_obj[0].sucsses_proc_last_dt}
            />
          )}
        </div>
        <div className={classes.dopchart}>
          <ChartComponent
            data_eror={map_obj[0].error}
            data_succses={map_obj[0].success}
            isfull={true}
          />
        </div>
      </div>
    </>
  );
}
