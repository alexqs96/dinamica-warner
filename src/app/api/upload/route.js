import Vote from '@/lib/models/Vote';
import { connectMongo } from '@/lib/mongo';
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json()
    let url = ""
    if (!body.image || !body.color) {
      return NextResponse.json({},{
        status: 400,
        statusText: "Campos Incompletos"
      })
    }

        
    if (body.image) {
      console.log("Uploading to Cloudinary...");
      
      const { secure_url } = await cloudinary.uploader.upload(body.image)
      console.log("cloudinary: "+secure_url);
      
      if (secure_url) {
        url = secure_url
      }
    }

    await connectMongo()

    new Vote({
      name: "",
      image: url,
      color: body.color,
      votes: 0
    }).save()

    return NextResponse.json({
    },
    {
      status: 200,
      statusText: "Meme Subido"
    })

  } catch (error) {
    
  }
}