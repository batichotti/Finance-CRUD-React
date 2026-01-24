import * as itemService from "../services/itemService.js";

export const getItems = async(req, res) => {
    try {
        const items = await itemService.getItems();
        res.status(200).json(items);
    } catch (err){
        console.error('Error fetching items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createItem = async(req, res) => {
    try {
        const itemData = req.body;
        const newItem = await itemService.createItem(itemData);

        res.status(200).json(newItem);
    } catch (err){
        console.error('Error creating items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const updateItem = async(req, res) => {
    try {
        const itemId = req.params.id;
        const itemData = req.body;
        const updatedItem = await itemService.updateItem(itemId, itemData);
        
        (updatedItem)?(res.status(200).json(updatedItem)):(res.status(404).json({ message: "Item not founded" }));
    } catch (err){
        console.error('Error updating items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const deleteItem = async(req, res) => {
    try {
        const itemId = req.params.id;
        const deletedItem = await itemService.deleteItem(itemId);
        
        (deletedItem)?(res.status(200).send()):(res.status(404).json({ message: "Item not founded" }));
    } catch (err){
        console.error('Error deleting items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
export const searchItem = async(req, res) => {
    try {
        const searchTerm = req.query.q;
        const items = await itemService.searchItem(searchTerm);
        
        res.status(200).json(items);
    } catch (err){
        console.error('Error searching items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}