import "./final.css";
import Image from "next/image";

const Final = ({searchParams}) => {

  console.log(searchParams?.winner);

  return (
    <div className="container_ending">
      <div className="containerWarner">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
        <div className="circle five"></div>
        <div className="circle six"></div>
      </div>
      <div className="LooneyTunes">
        <h1 className="text-4xl md:text-7xl">¡GANADOR!</h1>
      </div>
      <div className="image_container">
        <Image
          src={searchParams?.winner || "/alumnos/default.jpg"}
          className="image_end"
          width={400}
          height={400}
          unoptimized
          alt="Meme Ganador"
        />
      </div>
      <div className="ThatsAllFolks">
        <h2 className="text-4xl md:text-7xl">
          ¡ESO ES TODO AMIGOS!
        </h2>
      </div>
    </div>
  );
};

export default Final;
