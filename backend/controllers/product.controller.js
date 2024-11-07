import { redis } from "../lib/redis";
import Product from "../models/product.model"

export const getAllProducts = async(req,res)=>{
try {

    const products = await Product.find({});
    res.json({products});
    
} catch (error) {
    console.log("error in getting all the products",error.message);
    res.status(500).json({message : "error",error : error.message})
    
}
}

export const getFeaturedProducts = async(req,res) =>{
    try {
        let featuredProducts = await redis.get("featured_products")
        if(featuredProducts){
            return req.json(JSON.parse({featuredProducts}))
        }
        //if not in redis get from mongodb
        //.lean() gonna return plain javascript object not a mongodb document it is good for performance

        featuredProducts = await Product.find({isFeatured:true}).lean();
        if(!featuredProducts){
            return res.status(404).json({message : "No featured products found"});
        }

        //set in redis for future
        await redis.set("featured_products",JSON.stringify(featuredProducts))
        res.json(featuredProducts)

    } catch (error) {
        console.log("error in getting featured products",error.message);
    res.status(500).json({message : "error",error : error.message})
        
    }
}