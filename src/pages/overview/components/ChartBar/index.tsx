import React from 'react';
import { Bar } from "react-chartjs-2";

export const ChartBar = () => {
  return (
    <Bar
        data={{
          labels: [
            "Đẩy tin nhanh",
            "Gói đẩy tin",
            "Tin nổi bật",
            "Tin ưu tiên",
            "Tin đặc biệt",
            "Heightline",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
                "#c45850"
              ],
              data: [2478, 5267, 734, 784, 433, 5267]
            }
          ]
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050"
          }
        }}
      />
  );

}