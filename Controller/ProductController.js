import Product from "../Model/ProductSchema.js";

export const Getproducts = async(req,res) => {
  try {    
  const products = await Product.find({});

  res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message});
  }  

}

export const Getproductbyid = async(req,res) =>{
try {

const item = await Product.findOne({'id':req.params.id});

res.status(200).json(item);  
} catch (error) {
  res.status(500).json({message:error.message});
}
}