"use client";
import Image from "next/image";
import * as io from "socket.io-client";

const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default function Memes({data}){

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

    socket.emit("vote", id);
  }

  return (
    <>
    
    {
      data.image.map((e,index) => (
        <button key={index} onClick={e => handleVote(e, data?.ids[index])}>
          <Image
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

    </>
  )
}