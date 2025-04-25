import mongoose from "mongoose";

const restroSchema = new mongoose.Schema({
    name:{ type: String, required:true},
    password:{ type: String, required:true},
    email:{ type: String, required:true},
    address:String,
    phone:String,
    verified:{type: Boolean, default: false},
    foodListing:[{type: mongoose.Schema.Types.ObjectId, ref:"Listing"}]
})
const Restro = mongoose.models.Restro || mongoose.model("Restro", restroSchema);
export default Restro;