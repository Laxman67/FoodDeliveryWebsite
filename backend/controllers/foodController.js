import FoodModel from "../models/foodModel.js";
import fs from 'fs'



//Add Food Item


const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.status(201).json({success:true,message:"Food Added !"})
    } catch (error) {
        console.log(error);
        
        res.status(401).json({success:false,message:"Error Occured while Food adding !"})

    }


}


export { addFood }
