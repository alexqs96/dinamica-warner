import React from "react";
import "./qr.css";
import Image from "next/image";
import { Button_Start } from "../Button/Button_start";

export const Qr = () => {
  return (
    <div className="home_container">
      <h1 className="title">¿Cómo la pasaste?</h1>
      <div className="container_qr">
        <div className="qr">
          <h2 className="subtitle">Tu voto nos importa</h2>
          <div className="container_image">
            <Image
              className="image"
              src="/img/qr.png"
              width={400}
              height={400}
            />
          </div>
          <p className="text">Vota ingresando con el Qr</p>
          <Button_Start />
        </div>
      </div>
    </div>
  );
};
