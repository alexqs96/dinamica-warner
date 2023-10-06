import React from "react";
import "./qr.css";
import Image from "next/image";
import { Button_Start } from "../Button/Button_start";

export const Qr = () => {
  return (
    <div className="home_container max-w-2xl w-[95%] mx-auto mb-20 max-sm:mt-10">
      <h1 className="title text-[2rem] lg:text-[4rem]">¿Cómo la pasaste?</h1>
      <div className="container_qr">
        <div className="qr">
          <h2 className="subtitle text-[1.5rem] lg:text-[3rem] text-center">Tu voto nos importa</h2>
          <div className="container_image">
            <QRCode styles={"w-full"} />
          </div>
          <p className="text subtitle text-[1.5rem] lg:text-[2rem] text-center">Vota ingresando con el Qr</p>
          <Button_Start />
        </div>
      </div>
    </div>
  );
};

function QRCode({styles}) {
  return (
    <svg
      viewBox="-1 -1 31 31"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      id="qr code"
      className={styles}
    >
      <rect
        id="qr background"
        fillOpacity="1"
        fill="rgb(255, 255, 255)"
        x="-1"
        y="-1"
        width="31"
        height="31"
      ></rect>
      <path
        fillOpacity="1"
        fill="rgb(0, 0, 0)"
        id="qr dark pixels"
        fillRule="evenodd"
        d="M 9 0 L 10 0 L 10 2 L 11 2 L 11 1 L 13 1 L 13 2 L 12 2 L 12 4 L 11 4 L 11 3 L 10 3 L 10 4 L 8 4 L 8 3 L 9 3 L 9 2 L 8 2 L 8 1 L 9 1 z M 15 0 L 20 0 L 20 1 L 18 1 L 18 2 L 17 2 L 17 1 L 15 1 z M 14 2 L 15 2 L 15 3 L 14 3 z M 16 2 L 17 2 L 17 3 L 18 3 L 18 4 L 16 4 z M 18 2 L 20 2 L 20 3 L 18 3 z M 20 3 L 21 3 L 21 8 L 20 8 L 20 5 L 19 5 L 19 4 L 20 4 z M 10 4 L 11 4 L 11 7 L 10 7 z M 12 4 L 16 4 L 16 5 L 18 5 L 18 6 L 17 6 L 17 7 L 16 7 L 16 6 L 15 6 L 15 7 L 14 7 L 14 6 L 13 6 L 13 5 L 12 5 z M 8 5 L 9 5 L 9 7 L 8 7 z M 12 6 L 13 6 L 13 7 L 14 7 L 14 8 L 13 8 L 13 9 L 12 9 z M 18 6 L 19 6 L 19 8 L 18 8 z M 15 7 L 16 7 L 16 9 L 17 9 L 17 10 L 15 10 L 15 9 L 14 9 L 14 8 L 15 8 z M 0 8 L 5 8 L 5 9 L 2 9 L 2 13 L 1 13 L 1 14 L 0 14 L 0 12 L 1 12 L 1 11 L 0 11 z M 6 8 L 11 8 L 11 9 L 10 9 L 10 11 L 11 11 L 11 10 L 13 10 L 13 11 L 12 11 L 12 13 L 11 13 L 11 12 L 10 12 L 10 13 L 11 13 L 11 14 L 10 14 L 10 15 L 11 15 L 11 18 L 13 18 L 13 19 L 12 19 L 12 21 L 11 21 L 11 19 L 9 19 L 9 17 L 10 17 L 10 16 L 9 16 L 9 14 L 7 14 L 7 13 L 5 13 L 5 15 L 4 15 L 4 17 L 3 17 L 3 16 L 2 16 L 2 17 L 3 17 L 3 18 L 5 18 L 5 20 L 4 20 L 4 19 L 2 19 L 2 18 L 1 18 L 1 21 L 0 21 L 0 16 L 1 16 L 1 15 L 3 15 L 3 14 L 4 14 L 4 12 L 3 12 L 3 11 L 5 11 L 5 12 L 7 12 L 7 11 L 5 11 L 5 10 L 8 10 L 8 9 L 6 9 zM 8 11 L 9 11 L 9 13 L 8 13 z M 17 8 L 18 8 L 18 9 L 17 9 z M 21 8 L 22 8 L 22 9 L 23 9 L 23 8 L 24 8 L 24 9 L 25 9 L 25 11 L 26 11 L 26 12 L 27 12 L 27 13 L 25 13 L 25 12 L 24 12 L 24 11 L 22 11 L 22 10 L 18 10 L 18 9 L 21 9 z M 25 8 L 26 8 L 26 9 L 25 9 z M 27 8 L 28 8 L 28 9 L 27 9 z M 28 9 L 29 9 L 29 10 L 28 10 z M 14 11 L 15 11 L 15 12 L 14 12 z M 16 11 L 17 11 L 17 12 L 16 12 z M 19 11 L 21 11 L 21 12 L 20 12 L 20 13 L 25 13 L 25 14 L 23 14 L 23 15 L 21 15 L 21 14 L 19 14 z M 27 11 L 28 11 L 28 12 L 27 12 z M 17 12 L 18 12 L 18 13 L 17 13 z M 2 13 L 3 13 L 3 14 L 2 14 z M 12 13 L 16 13 L 16 16 L 18 16 L 18 17 L 17 17 L 17 18 L 16 18 L 16 17 L 14 17 L 14 16 L 15 16 L 15 15 L 14 15 L 14 16 L 13 16 L 13 17 L 12 17 L 12 15 L 13 15 L 13 14 L 12 14 z M 28 13 L 29 13 L 29 14 L 28 14 z M 6 14 L 7 14 L 7 15 L 6 15 z M 17 14 L 19 14 L 19 15 L 20 15 L 20 16 L 18 16 L 18 15 L 17 15 z M 25 14 L 27 14 L 27 15 L 25 15 z M 5 15 L 6 15 L 6 16 L 5 16 z M 7 15 L 8 15 L 8 16 L 7 16 z M 23 15 L 24 15 L 24 16 L 23 16 z M 27 15 L 28 15 L 28 16 L 27 16 z M 6 16 L 7 16 L 7 17 L 6 17 z M 20 16 L 21 16 L 21 17 L 25 17 L 25 19 L 23 19 L 23 18 L 22 18 L 22 19 L 20 19 L 20 18 L 19 18 L 19 19 L 17 19 L 17 18 L 18 18 L 18 17 L 20 17 z M 25 16 L 27 16 L 27 19 L 26 19 L 26 17 L 25 17 z M 28 17 L 29 17 L 29 18 L 28 18 z M 6 18 L 8 18 L 8 20 L 7 20 L 7 19 L 6 19 z M 15 18 L 16 18 L 16 20 L 18 20 L 18 21 L 17 21 L 17 23 L 16 23 L 16 25 L 14 25 L 14 24 L 15 24 L 15 23 L 14 23 L 14 24 L 13 24 L 13 25 L 12 25 L 12 23 L 13 23 L 13 22 L 12 22 L 12 21 L 15 21 L 15 22 L 16 22 L 16 21 L 15 21 L 15 20 L 14 20 L 14 19 L 15 19 z M 22 19 L 23 19 L 23 20 L 25 20 L 25 21 L 26 21 L 26 20 L 27 20 L 27 19 L 28 19 L 28 20 L 29 20 L 29 22 L 27 22 L 27 23 L 25 23 L 25 25 L 21 25 L 21 26 L 20 26 L 20 27 L 21 27 L 21 26 L 25 26 L 25 25 L 26 25 L 26 24 L 28 24 L 28 25 L 29 25 L 29 26 L 28 26 L 28 28 L 27 28 L 27 27 L 26 27 L 26 28 L 25 28 L 25 29 L 23 29 L 23 28 L 24 28 L 24 27 L 22 27 L 22 28 L 20 28 L 20 29 L 17 29 L 17 28 L 18 28 L 18 27 L 19 27 L 19 26 L 16 26 L 16 25 L 17 25 L 17 24 L 18 24 L 18 25 L 20 25 L 20 24 L 19 24 L 19 22 L 20 22 L 20 20 L 22 20 zM 21 21 L 24 21 L 24 24 L 21 24 z M 6 20 L 7 20 L 7 21 L 6 21 z M 8 20 L 9 20 L 9 23 L 8 23 z M 10 21 L 11 21 L 11 22 L 10 22 z M 18 21 L 19 21 L 19 22 L 18 22 z M 22 22 L 23 22 L 23 23 L 22 23 z M 8 24 L 10 24 L 10 25 L 9 25 L 9 28 L 10 28 L 10 25 L 11 25 L 11 26 L 13 26 L 13 27 L 12 27 L 12 29 L 8 29 z M 15 26 L 16 26 L 16 27 L 15 27 z M 14 27 L 15 27 L 15 28 L 14 28 z M 16 27 L 17 27 L 17 28 L 16 28 z M 26 28 L 27 28 L 27 29 L 26 29 z"
      ></path>
      <path
        id="qr squares"
        d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M22,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM23,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM24,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,22h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,23h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,24h3h0v0v3v0h0h-3h0v0v-3v0h0z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="rgb(0, 0, 0)"
      ></path>
    </svg>
  );
}