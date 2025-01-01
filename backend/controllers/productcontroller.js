import mongoose from "mongoose";
import Product  from "../models/productmodel.js";

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ sucess: true, data: products });
    }catch (error) {
        console.log("Error in fetching products:",error.message);
        res.status(500).json({ sucess: false,message: "Server Error"})
    }
    };

    export const createproducts = async (req,res) => {
            const product = req.body;
        
        if(!product.name || !product.price || !product.image){
            return res.status(400).json({ success: false, message: "please provide all fields"});
        }
        
        const newProduct = new Product(product)
        try {
            await newProduct.save();
            res.status(201).json({ sucess: true, data: newProduct })
        } catch (error) {
            console.error("error in create Product:",error.message)
            res.status(500).json({ sucess: false,message: "Server Error"})
        }
        
        };

        export const updateproducts = async (req,res) => {
    
            const {id} = req.params;
            
            const product= req.body;
            
            if (!mongoose.Types.ObjectId.isValid(id)){
                res.status(404).json({ sucess: false,message: "Invalid Product id " })
            }
            
            try {
               const updatedProduct=
                await Product.findByIdAndUpdate(id, product,{new:true});
                res.status(200).json({ sucess: true, data: updatedProduct});
            } catch (error) {
                res.status(404).json({ sucess: false,message: "server error " })
            }    
            
            }

            export const deleteproducts = async (req,res) => {
                const {id} = req.params;      //id lai catch gareraw we can check for it in database
             //    console.log("id:",id)
             if (!mongoose.Types.ObjectId.isValid(id)){
                res.status(404).json({ sucess: false,message: "Invalid Product id " })
            }
             try {
                 await Product.findByIdAndDelete(id);
                 res.status(200).json({ sucess: true, mesaage: "Prodect deleted" });
             } catch (error) {
                 console.log("error in deleting products:",error.message);
                 res.status(500).json({ sucess: false,message: "Server error"}) 
             }
             
             }   

            