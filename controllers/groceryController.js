const groceryService = require('../services/groceryService');

exports.addGroceryItem = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const groceryItem = await groceryService.addGroceryItem(name, price, quantity);
    res.status(201).json(groceryItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.viewGroceryItems = async (req, res) => {
  try {
    const groceryItems = await groceryService.viewGroceryItems();
    res.status(200).json(groceryItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.removeGroceryItem = async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const deleted = await groceryService.removeGroceryItem(itemId);
    if (deleted) {
      res.status(200).json({ message: 'Grocery item removed successfully' });
    } else {
      res.status(404).json({ error: 'Grocery item not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateGroceryItem = async (req, res) => {
  const itemId = req.params.itemId;
  const { name, price, quantity } = req.body;
  try {
    const updated = await groceryService.updateGroceryItem(itemId, name, price, quantity);
    if (updated) {
      res.status(200).json({ message: 'Grocery item updated successfully' });
    } else {
      res.status(404).json({ error: 'Grocery item not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.manageInventory = async (req, res) => {
  const itemId = req.params.itemId;
  const { quantity } = req.body;
  try {
    const updated = await groceryService.manageInventory(itemId, quantity);
    if (updated) {
      res.status(200).json({ message: 'Inventory managed successfully' });
    } else {
      res.status(404).json({ error: 'Grocery item not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.bookGroceryItems = async (req, res) => {
  const { items } = req.body;
  try {
    const message = await groceryService.bookGroceryItems(items);
    res.status(200).json({ message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
