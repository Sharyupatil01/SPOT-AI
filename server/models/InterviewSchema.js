const mongoose=require('mongoose');

const InterviewSchem = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    
})