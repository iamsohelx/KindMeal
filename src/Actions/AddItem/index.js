// /actions/upload.js
'use server';

import connDB from "@/database/dbconnection";
import Fooditem from "@/database/Models/fooditem";
import cloudinary from "@/lib/config/cloudinary";
import Jwt from 'jsonwebtoken'
import { cookies } from "next/headers";

export async function AddItem(FormData) {

  const { foodname, expiry, description, address, img } = FormData;

  const file = img;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
 
  const uploadRes = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (err, result) => {
      if (err) reject(err);
      else resolve(result);
    }).end(buffer);
  });

  let cookieStore = cookies();
  let token = (await cookieStore).get('token')
  
const restroUser = Jwt.verify(token.value, 'kindmeal2911');

  const date = new Date();
  const formatted = date.toLocaleString('en-GB',{
    day:'numeric',
    month:'short',
    year:'numeric',
    hour:'numeric',
    hour12:true,
  }).replace(':00','').replace(' pm' || ' am','pm'||'am').toLowerCase().toString()
  
    const monthname = date.toLocaleString('default', {
       month:'short',
  })

  const letters = [...Array(3)].map(()=> String.fromCharCode(65 + Math.random() * 26 | 0)).join('');
  const numbers = Math.floor(100 + Math.random() * 900);
  const foodid = letters.concat(numbers);

  
    await connDB() 
    let res = await Fooditem.create({
      foodname,
      foodid,
      expiry,
      description,
      address,
      month: monthname,
      restroid: restroUser.userid,
      restroname: restroUser.restroname,
      date:formatted,
      imgurl:uploadRes.secure_url
    })      

    if(res){
      return {
        success: true,
        id: JSON.parse(JSON.stringify(res._id)),
        restroname: JSON.parse(JSON.stringify(res.restroname))
      }
    }
    return {
      success: false,
      msg: "Something went wrong"
    }
}
