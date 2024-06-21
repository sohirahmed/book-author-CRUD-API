import bookModel from "../../../DB/models/book.model.js";


//create new book 
export const createBooks = async (req,res,next)=>{
    try{  
        const {title,content,author,publishedDate} = req.body;
        const bookExist = await bookModel.findOne({title})  
        if(bookExist){
            return res.status(400).json({msg:"title already exist"})
    }
    const bookInstance =  new bookModel({title, content , author , publishedDate})
    await bookInstance.save()
    res.status(200).json({msg:"done",bookInstance})

    }catch(err){
    res.status(400).json({msg:"fail",err })
        }
}

//get books
export const getBooks = async (req,res,next)=>{
    try{
        const books = await bookModel.find()
        res.status(200).json({msg:"done", books})
    }catch(err){
        res.status(400).json({msg:"fail" , err})
    }
}

//getBooksById
export const getBooksById = async(req,res,next)=>{
    try{
        const book = await bookModel.findById(req.params.id)
        res.status(200).json({msg:"done" , book})
    }catch(err){
        res.status(400).json({msg:"fail" , book})
    }
}

//updateBook

export const updateBook = async (req,res,next)=>{
    const{title,id} = req.body;
    const book = await bookModel.findByIdAndUpdate({_id:id} , {title},{new:true})
    res.status(200).json({msg:"done"});
}

//deleteBook
export const deleteBook = async(req,res,next)=>{
    const book = await bookModel.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"done"})
}
