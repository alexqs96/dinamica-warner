import Vote from "@/lib/models/Vote";
import { connectMongo } from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(){
  try {
    console.log("Conectando a MongoDB /votes");
    await connectMongo();

    const data = await Vote.find()

    return NextResponse.json(data,{
      status: 200,
      statusText: "Listado de Memes"
    })

  } catch (error) {
    console.log("Hubo un error al conectar a MongoDB");
    return NextResponse.json([],{
      status: 500,
      statusText: "Hubo un error en el servidor."
    }) 
  }
}