import mongoose from 'mongoose';
import CartDataModel from '../Models/CartData.Models.js';


async function storeDataExternally(data) {
    try {

        // console.log(data,"data str")
        // Create a new document in the CartData collection using the CartDataModel
        const newCartData = new CartDataModel({ data });
        // Save the new document to the database
        const savedCartData = await newCartData.save();
        // Return the ID of the inserted document
        return savedCartData._id;
    } catch (error) {
        // Handle any errors
        console.error('Error storing data externally:', error);
        throw error;
    }
}

export { storeDataExternally };