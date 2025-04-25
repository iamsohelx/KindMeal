import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
    name:{ type: String, required:true},
    password:{ type: String, required:true},
    email:{ type: String, required:true},
    address:String,
    phone:String,
    verified:{type: Boolean, default: false},
    claimedListing:[{type: mongoose.Schema.Types.ObjectId, ref:"Listing"}]
})

module.exports = mongoose.models.Ngo || mongoose.model("Ngo", ngoSchema);