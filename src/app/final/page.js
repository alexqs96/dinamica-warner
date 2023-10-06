"use client"
import "./final.css";
import Image from "next/image";

const Final = () => {
  return (
    <div className="container_ending">
      <div class="container">
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
        <div class="circle four"></div>
        <div class="circle five"></div>
        <div class="circle six"></div>
      </div>
      <div class="LooneyTunes">
        <h1>¡GANADOR!</h1>
      </div>
      <div className="image_container">
        <Image
          src="/img/bugsbunny.jpg"
          className="image_end"
          width={400}
          height={400}
        />
      </div>
      <div className="ThatsAllFolks">
        <h2>
          ¡ESO ES TODO AMIGOS!
        </h2>
      </div>
    </div>
  );
};

export default Final;
