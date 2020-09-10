import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function SalesChart({ sales }) {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const newData = [];
    sales &&
      sales.map((el) => {
        const splitedDate = el.date.split("-");
        const splitedTime = el.time.split("+")[0];
        const newDate = new Date(
          `${splitedDate[1]}/${splitedDate[2]}/${splitedDate[0]} ${splitedTime}`
        );
        const milliseconds = newDate.getTime();
        const arrayToAdd = [milliseconds, el.sale_price];
        return newData.push(arrayToAdd);
      });
    setSalesData(newData);
  }, [sales]);

  const options = {
    title: {
      text: " ",
    },
    series: [
      {
        name: "Amount",
        data: salesData,
        type: "area",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
        lineColor: Highcharts.getOptions().colors[2],
        lineWidth: 1,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[2]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[2])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
    ],
  };

  return (
    <div id="container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
      />
    </div>
  );
}

render(<SalesChart />, document.getElementById("root"));
