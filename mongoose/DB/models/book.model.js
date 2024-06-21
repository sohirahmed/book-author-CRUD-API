import { Schema,Types,connect,model } from "mongoose";

const bookSchema = new Schema({
    title:{
        type : String,
        required : true
    },
    content:{
        type: String,
        required : true
    },
    author:{
        type: String,
        required :true
    },
    publishedDate:{
        type: Date,
        default: Date.now
    }

},{
    timestamps : true
})

const bookModel = model('book', bookSchema);
export default bookModel


