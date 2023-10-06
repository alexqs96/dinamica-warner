"use client";
import Image from "next/image";
import * as io from "socket.io-client";
import toast, { Toaster } from 'react-hot-toast';

const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default function Memes({data}){

  if (!data) {
    return <p>No hay datos cargados.</p>
  }

  const handleVote = async (e, id) => {
    e.preventDefault();
    console.log("Votaste: "+id);

    const res = await fetch(`/api/votes`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({_id: id})
    })

    console.log("Voto POST: "+res.statusText);
    toast.success("Gracias por tu Voto! ❤️")
    socket.emit("vote", id);
  }

  return (
    <>
    <Toaster />
    <h1 className="text-2xl lg:text-4xl font-semibold my-5 lucky text-center">Vota tu Meme Favorito!</h1>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {
      data?.image?.map((e,index) => (
        <button key={index} className="group overflow-hidden rounded-2xl relative" onClick={e => handleVote(e, data?.ids[index])}>
          <span className="transition-all duration-300 opacity-0 group-hover:opacity-100 grid absolute h-full w-full bg-slate-100/50 inset-0 place-items-center text-5xl lucky">Votar</span>
          <Image
            className="w-full h-[320px] object-cover"
            width={256.1}
            height={512}
            src={e}
            alt={e}
            priority
            unoptimized
          />
        </button>
      ))
    }
    </div>
    </>
  )
}