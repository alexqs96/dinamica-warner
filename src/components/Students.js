'use client'
import Image from "next/image";
import { EmailLogo, GithubLogo, LinkedinLogo } from "./Logo";
import { useState } from "react";

export default function Students({data, page}) {
  const datos = [
    data.slice(0,16),
    data.slice(16,32),
    data.slice(32,49)
  ]

  console.log(datos.length);

  if (!data) {
    return <p>...</p>
  }

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {datos[page]?.map((e, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border p-5 rounded-2xl font-medium"
        >
          <Image
            className="w-full h-[320px] object-cover rounded-xl"
            src={e.Foto? ("/alumnos/" + e.Foto) : "/alumnos/default.jpg"
            }
            width={256.1}
            height={256}
            alt={e.Nombre + " " + e.Apellido}
            unoptimized
          />
          <p className="text-lg">
            {e.Nombre} {e.Apellido}
          </p>
          <div className="flex gap-2">
            {e.Github ? (
              <a
                href={e.Github}
                target="_blank"
                rel="noreferrer noopener"
                alt={"Github de " + e.Nombre + " " + e.Apellido}
              >
                <GithubLogo size={24} />
              </a>
            ) : null}
            {e.Linkedin ? (
              <a
                href={e.Linkedin}
                target="_blank"
                rel="noreferrer noopener"
                alt={"Linkedin de " + e.Nombre + " " + e.Apellido}
              >
                <LinkedinLogo size={24} />
              </a>
            ) : null}

            {e.Correo ? (
              <a
                href={"mailto:" + e.Correo}
                target="_blank"
                rel="noreferrer noopener"
                alt={"Email de " + e.Nombre + " " + e.Apellido}
              >
                <EmailLogo size={24} />
              </a>
            ) : null}
          </div>
        </div>
      ))}
      <p className="text-center -mb-2 font-medium">Paginas</p>
      <div className="flex items-center gap-2 justify-center">
      <button className={"py-2 px-3 rounded-lg text-white"+ (page+1 === 1? " font-bold bg-orange-600" : " bg-orange-500")} onClick={() => location.replace("/?page=1")}>1</button>
      <button className={"py-2 px-3 rounded-lg text-white"+ (page+1 === 2? " font-bold bg-orange-600" : " bg-orange-500")} onClick={() => location.replace("?page=2")}>2</button>
      <button className={"py-2 px-3 rounded-lg text-white"+ (page+1 === 3? " font-bold bg-orange-600" : " bg-orange-500")} onClick={() => location.replace("?page=3")}>3</button>
      </div>
    </section>
  );
}
