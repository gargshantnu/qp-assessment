const GroceryItem = require('../models/GroceryItem');

exports.addGroceryItem = async (name, price, quantity) => {
  try {
    const groceryItem = await GroceryItem.create({ name, price, quantity });
    return groceryItem;
  } catch (err) {
    throw new Error('Error adding grocery item');
  }
};

exports.viewGroceryItems = async () => {
  try {
    const groceryItems = await GroceryItem.findAll();
    return groceryItems;
  } catch (err) {
    throw new Error('Error retrieving grocery items');
  }
};

exports.removeGroceryItem = async (itemId) => {
  try {
    const deletedRows = await GroceryItem.destroy({
      where: { id: itemId },
    });
    return deletedRows > 0;
  } catch (err) {
    throw new Error('Error removing grocery item');
  }
};

exports.updateGroceryItem = async (itemId, name, price, quantity) => {
  try {
    const [updatedRows] = await GroceryItem.update(
      { name, price, quantity },
      {
        where: { id: itemId },
      }
    );
    return updatedRows > 0;
  } catch (err) {
    throw new Error('Error updating grocery item');
  }
};

exports.manageInventory = async (itemId, quantity) => {
  try {
    const [updatedRows] = await GroceryItem.update(
      { quantity },
      {
        where: { id: itemId },
      }
    );
    return updatedRows > 0;
  } catch (err) {
    throw new Error('Error managing inventory');
  }
};



exports.bookGroceryItems = async (items) => {
  try {
    // Implement booking logic here
    // For simplicity, let's assume a successful booking for now
    return 'Items booked successfully';
  } catch (err) {
    throw new Error('Error booking grocery items');
  }
};
