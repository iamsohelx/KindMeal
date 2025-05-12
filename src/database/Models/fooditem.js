import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
      foodname: String,
      expiry:String,
      description:String,
      address: String,
      restroid: String,
      restroname: String,
      date: String,
      imgurl:String
})
const Fooditem = mongoose.models.Fooditem || mongoose.model("Fooditem", foodSchema);
export default Fooditem;