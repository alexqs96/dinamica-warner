import Vote from "@/lib/models/Vote";
import { connectMongo } from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(){
  try {
    console.log("GET /votes");
    await connectMongo();

    const res = await Vote.find().sort({'votes':-1}).limit(4);

    const data = {
      ids: res.map(e => e._id),
      name: res.map(e => e.name),
      image: res.map(e => e.image),
      color: res.map(e => e.color),
      votes: res.map(e => e.votes)
    }

    return NextResponse.json(data,{
      status: 200,
      statusText: "Listado de los 4 Mejores Memes"
    })

  } catch (error) {
    console.log("Hubo un error al conectar a MongoDB");
    return NextResponse.json([],{
      status: 500,
      statusText: "Hubo un error en el servidor."
    }) 
  }
}

export async function POST(req){
  try {
    const body = await req.json()

    console.log("POST /votes");
    await connectMongo();

    const data = await Vote.findByIdAndUpdate(body._id, { $inc: { votes: 1 } }, { new: true })

    if (data) {
      return NextResponse.json(data,{
        status: 200,
        statusText: "Voto Agregado"
      })
    }
    else
    {
      return NextResponse.json(data,{
        status: 400,
        statusText: "Hubo un error al actualizar."
      })
    }

  } catch (error){
    console.log("Hubo un error al conectar a MongoDB");
    return NextResponse.json([],{
      status: 500,
      statusText: "Hubo un error en el servidor."
    }) 
  }
}