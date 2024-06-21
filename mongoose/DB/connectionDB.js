import mongoose from "mongoose";

const connectionDB=async()=>{
    return await mongoose.connect("mongodb://localhost:27017/assignment8")
    .then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
    console.log({msg:"fail to connect to DB",err})
    })
}


export default connectionDB