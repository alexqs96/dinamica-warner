import Vote from "@/lib/models/Vote";
import { connectMongo } from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(){
  try {
    console.log("GET /list");
    await connectMongo();

    const res = await Vote.find().select("image");

    if (res) {
      const data = {
        ids: res.map(e => e._id),
        image: res.map(e => e.image)
      }
  
      return NextResponse.json(data,{
        status: 200,
        statusText: "Listado de Memes"
      }) 
    }
    else
    {
      return NextResponse.json({},{
        status: 400,
        statusText: "Hubo un error al listar los memes"
      })
    }

  } catch (error) {
    console.log("Hubo un error al conectar a MongoDB");
    return NextResponse.json([],{
      status: 500,
      statusText: "Hubo un error en el servidor."
    })
  }
}

export async function POST(){
  try {
    console.log("POST /list");
    await connectMongo();

    const res = await Vote.updateMany({}, { $set: { votes: 0 } })

    if (res) {
      return NextResponse.json({},{
        status: 200,
        statusText: "Campos reseteados"
      })
    }
    else
    {
      return NextResponse.json({},{
        status: 400,
        statusText: "Hubo un error al resetear"
      })
    }
  } catch (error) {
    console.log("Hubo un error al conectar a MongoDB");
    return NextResponse.json([],{
      status: 500,
      statusText: "Hubo un error en el servidor."
    })
  }
}