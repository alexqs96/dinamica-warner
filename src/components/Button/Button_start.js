import React from "react";
import "./button.css";
import Link from "next/link";

export const Button_Start = () => {
  return (
    <div className="container_button">
      <Link href="/vota">
        <button className="button_start">¡COMENZAR!</button>
      </Link>
    </div>
  );
};
