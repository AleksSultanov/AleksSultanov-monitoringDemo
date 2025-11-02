import { Card } from "../components/Card/index.jsx";
import { tracks } from "../data/traks.jsx";
import { fimglink, fyear } from "../data/utl.jsx";
import classes from "./styles.module.css";
import { useState } from "react";

import { MenuContext } from "../store/context.jsx";

export function Years() {
  const [openMenuId, setOpenMenuId] = useState(null);
  function onOpenMenuId(id) {
    setOpenMenuId(id);
  }
  let placeyears = {};

  tracks.map((track) => {
    let map = track["map"];
    let cover = track["cover"];
    let sdatelst = track["date"];
    if (sdatelst != undefined) {
      let a_date = sdatelst.split(",");
      a_date.map((date) => {
        let year = date.substring(0, 4);
        if (Object.keys(placeyears).includes(year)) {
          let cnt = placeyears[year]["cnt"] + 1;
          placeyears[year] = { cnt: cnt, map: map, cover: cover };
        } else {
          placeyears[year] = { cnt: 1, map: map, cover: cover };
        }
      });
    }
  });

  return (
    <>
      <MenuContext.Provider
        value={{
          openMenuId,
          onOpenMenuId,
        }}
      >
        <div className={classes.box}>
          {Object.keys(placeyears).map((year) => {
            return (
              <Card
                key={year}
                imglink={fimglink(
                  placeyears[year]["map"],
                  placeyears[year]["cover"]
                )}
                caption=""
                textdata={year}
                maplink={fyear(year)}
                cnt={placeyears[year]["cnt"]}
              />
            );
          })}
        </div>
      </MenuContext.Provider>
    </>
  );
}
