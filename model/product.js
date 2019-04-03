let mongoose=require('mongoose');

let ProductSchema=mongoose.Schema({
    ProdId:{
        type:Number,
        required:true
    },
    ProName:{
    type: String,
    required: true
    },
    ProdPrice:{
    type:Number,
    required: true
    },
  
    },{ collection: 'Productdata' });

  module.exports= mongoose.model(' Product', ProductSchema);