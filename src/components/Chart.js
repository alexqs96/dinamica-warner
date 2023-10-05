'use client'

import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Image from "next/image";
import * as io from "socket.io-client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export const StatsBar = ({data}) => {
  const router = useRouter()
  const dataValues = ({
    labels: data.name,
    datasets: [
      {
        label: "Votos",
        data: data.votes,
        backgroundColor: data.color,
      },
    ],
  })

  useEffect(() => {
    socket.on("refreshVotes", () => {
      router.refresh();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])
  
  if (!data) {
    return <p>Cargando Tabla...</p>
  }

  return (
    <>
    <div>
      <div>
      <Bar
        className="h-[250px] lg:h-[400px]"
        data={dataValues}
        height="auto"
        width="auto"
        plugins={
          [ChartDataLabels, {beforeInit: function (chart) {
            const originalFit = chart.legend.fit
            chart.legend.fit = function fit() {
              originalFit.bind(chart.legend)()
              this.height += 50
            }
          }}]
        }
        
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins:{
            legend: {
              display: false,
            },
            datalabels: {
              display: true,
              color: "black",
              align: "end",
              anchor: "end",
              font: { size: "20" }
            }
          },
          scales: {
            // to remove the labels
            x: {
              border:{
                display: false
              },
              ticks: {
                display: false,
              },
              grid: {
                drawBorder: false,
                display: false,
              },
            },
            y: {
              border:{
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true,
              },
              
            },
          },
        }}
      />
      </div>

      <div className="flex h-fit justify-around w-[99.5%] ml-auto">
        {
          data?.image?.map((e, index) => (
            <Image
              className="object-contain max-sm:w-10 w-28"
              key={index}
              src={e}
              width={100}
              height={50}
              alt="img"
            />
          ))
        }
      </div>
    </div>
    </>
  );
};