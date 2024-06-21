import authorModel from "../../../DB/models/author.model.js";


// create new author 
export const createAuthor = async (req,res,next)=>{
    const  {name,bio, birthDate,books} = req.body;
    const authorInstance =  new  authorModel({name, bio, birthDate,books})
    await authorInstance.save()
    res.status(200).json({msg:"done",authorInstance})
}

//getAuthor
export const getAuthor = async (req,res,next)=>{
    try{
        const author = await authorModel.find({}).populate("books")
        res.status(200).json({msg:"done", author})
    }catch(err){
        res.status(400).json({msg:"fail" , err})
    }
}

//getAuthorsById
export const getAuthorById = async(req,res,next)=>{
    try{
        const author = await authorModel.findById(req.params.id).populate('books')
        res.status(200).json({msg:"done" , author})
    }catch(err){
        res.status(400).json({msg:"fail" , err})
    }
}

//updateAuthor

export const updateAuthor = async (req,res,next)=>{
    const{name,id} = req.body;
    const author = await authorModel.findByIdAndUpdate({_id:id} , {name},{new:true})
    res.status(200).json({msg:"done"});
}

//deleteAuthor
export const deleteAuthor = async(req,res,next)=>{
    const author = await authorModel.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"done"})
}
