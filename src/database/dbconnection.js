import mongoose from "mongoose";

const connDB = async ()=>{
    await mongoose.connect("mongodb+srv://kindmeal:H74eKXCWUBKjhH8m@kindmeal.vc7h0pi.mongodb.net/kindmeal")
    .then(()=> console.log("Database connected..."))
    .catch(()=> console.log("Could not connect!!!")
    )
}

export default connDB;