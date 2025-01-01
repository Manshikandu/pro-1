import express from "express";

import { createproducts, deleteproducts, getProducts, updateproducts } from "../controllers/productcontroller.js";

const router = express.Router();

router.get("/",getProducts);
    
router.post("/",createproducts);
        
router.put("/:id",updateproducts);
    
router.delete("/:id",deleteproducts);


export default router;