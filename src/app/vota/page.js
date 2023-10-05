"use client";
import Image from "next/image";
import * as io from "socket.io-client";
import memes from '@/db/memes.json'

const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default function VotePage(){

  const handleVote = async (e, id) => {
    e.preventDefault();

    console.log("id: "+id);
    socket.emit("vote", id);
  }

  return (
    <>
    
    {
      memes.map((e,index) => (
        <button key={index} onClick={e => handleVote(e, index)}>
          <Image
            width={256.1}
            height={512}
            src={"/"+e.image}
            alt={e.image}
            priority
            unoptimized
          />
        </button>
      ))
    }

    </>
  )
}