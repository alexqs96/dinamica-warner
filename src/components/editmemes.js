"use client";
import Image from "next/image";
import * as io from "socket.io-client";
import { useRouter } from "next/navigation";

const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default function EditMemes({data}){
  const router = useRouter()

  const handleVote = async (e, id) => {
    e.preventDefault();
    console.log("Borraste: "+id);

    const res = await fetch(`/api/votes`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({_id: id})
    })

    console.log("Borrar POST: "+res.statusText);

    socket.emit("vote", id);
    router.refresh();
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
    {
      data?.image?.map((e,index) => (
        <div key={index} className="relative w-full max-h-[256px]">
          <button className="absolute top-0 right-0 bg-red-500 p-3 text-white" onClick={x => handleVote(x, data.ids[index])}>X</button>
          <Image
            className="object-cover w-full h-full"
            width={256.1}
            height={512}
            src={e}
            alt={e}
            priority
            unoptimized
          />
        </div>
      ))
    }

    </div>
  )
}