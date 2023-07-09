import { products } from "./Constraints/data.js"
import Product from "./Model/ProductSchema.js";


const Defaultdata = async () =>{
try{
await Product.insertMany(products);

}catch(error){
    console.log(error);
}
}

export default Defaultdata;