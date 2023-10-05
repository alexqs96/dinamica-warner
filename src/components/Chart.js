'use client'
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Image from "next/image";
import { useState } from "react";
import { splitByProperties } from "@/utils/utils";
import memes from '@/db/memes.json'

export const StatsBar = () => {
  const [data, setData] = useState(splitByProperties(memes))

  console.log(data);

  return (
    <>
    <div>
      <div>
      <Bar
        className="h-[250px] lg:h-[400px]"
        data={{
          labels: data.name,
          datasets: [
            {
              label: "Votos",
              data: data.vote,
              backgroundColor: data.color,
            },
          ]
        }}
        height="auto"
        width="auto"
        options={{
          maintainAspectRatio: false
        }}
      />
      </div>

      <div className="flex h-fit justify-around">
        <div className="max-sm:w-1 max-sm:-mr-5 sm:hidden"></div>
        {
          data.image.map((e, index) => (
            <Image
              key={index}
              src={"/"+e}
              width={100}
              height={50}
              className="object-contain w-10"
              alt="img"
            />
          ))
        }
      </div>
    </div>
    </>
  );
};