import classes from "./styles.module.css";
import { infData } from "../data/infdata.jsx";
import { Card, CardMini } from "../components/Card/index.jsx";
import { BASE_PAGE } from "./main.jsx";

export function Root() {
  return (
    <>
      <div className={classes.panel}>
        <div className={classes.header}></div>
        <div className={classes.dashboard}>
          {infData?.length > 0 &&
            infData.map((idata) => {
              return (
                <CardMini
                  key={idata.id}
                  name={idata.name}
                  level={idata.level}
                  dscr={idata.dscr}
                  cnt={
                    Object.values(Object(idata.success)).reduce(
                      (a, b) => a + b,
                      0
                    ) +
                    Object.values(Object(idata.error)).reduce(
                      (a, b) => a + b,
                      0
                    )
                  }
                  link={`${BASE_PAGE}detail?id=${idata.id}`}
                />
              );
            })}
        </div>

        <div className={classes.separator}>
          <br></br>Версия с диаграммой
        </div>
        <div className={classes.dashboard}>
          {infData?.length > 0 &&
            infData.map((idata) => {
              return (
                <Card
                  key={idata.id}
                  name={idata.name}
                  level={idata.level}
                  dscr={idata.dscr}
                  cnt={
                    Object.values(Object(idata.success)).reduce(
                      (a, b) => a + b,
                      0
                    ) +
                    Object.values(Object(idata.error)).reduce(
                      (a, b) => a + b,
                      0
                    )
                  }
                  link={`${BASE_PAGE}detail?id=${idata.id}`}
                  data_succses={Object(idata.success)}
                  data_eror={Object(idata.error)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
