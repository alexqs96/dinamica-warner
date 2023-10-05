'use client'
import Image from "next/image";
import { useState } from "react";

async function getImageFile (file) {
  try {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        resolve(reader.result);
      };
  
      reader.onerror = () => {
        reject(new Error('Error al leer la imagen'));
      };
  
      if (file) {
        reader.readAsDataURL(file);
      } else {
        reject(new Error('Error al cargar la imagen'));
      }
    }); 
  } catch (error) {
    return ""
  }
}

export default function Agregar(){

  const [img, setImg] = useState(null)
  const [color, setColor] = useState("#ff0000")

  const saveImages = async (e) => {
    setImg(await getImageFile(e))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Subiendo...");
    const res = await fetch('/api/upload', {
      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        name: "",
        image: img,
        color,
        votes: 0
      })
    })

    console.log(res.statusText);

    if(res.status === 200){
      location.reload()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md mx-auto border rounded-2xl p-10 font-medium">
        <label className="flex flex-col gap-1">
          Cargar Imagen
          <input type="file" onChange={e => e.target.files? saveImages(e.target.files[0]) : null}></input>
        </label>

        {
          img?
          <Image
            className={"object-contain rounded-md aspect-square border-2 border-blue-500"}
            src={img}
            width={128}
            height={128}
            alt="image"
            unoptimized
            priority
          />
          :
          null
        }

        <label className="flex flex-col gap-1">
          Elegir Color
          <input type="color" onChange={e => setColor(e.target.value)}></input>
        </label>

        <button className="bg-black text-white p-2 rounded-md">Publicar</button>
      </form>
    </>
  )
}