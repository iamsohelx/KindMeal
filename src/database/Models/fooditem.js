import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
      foodname: String,
      foodid: String,
      expiry:String,
      description:String,
      address: String,
      restroid: String,
      restroname: String,
      date: String,
      month: String,
      imgurl:String
})
const Fooditem = mongoose.models.Fooditem || mongoose.model("Fooditem", foodSchema);
export default Fooditem;