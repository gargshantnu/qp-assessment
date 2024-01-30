const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const checkPermission = require("../middleware/checkPermission");
const operations = require("../constants/operations").operations;
const groceryController = require("../controllers/groceryController");
const groceryItemValidator = require("../middleware/validators/groceryItemValidator");

router.post(
    "/add-item",
    [
        authMiddleware,
        checkPermission(operations.ADD_GROCERIES),
        groceryItemValidator.validateAddGroceryItem,
    ],
    groceryController.addGroceryItem
);

router.get(
    "/view-items",
    [authMiddleware, checkPermission(operations.VIEW_GROCERIES)],
    groceryController.viewGroceryItems
);

router.get(
    "/book-items",
    [authMiddleware, checkPermission(operations.BOOK_GROCERIES)],
    groceryController.bookGroceryItems
);

router.delete(
    "/remove-item/:itemId",
    [
        authMiddleware,
        checkPermission(operations.REMOVE_GROCERIES),
        groceryItemValidator.validateRemoveGroceries,
    ],
    groceryController.removeGroceryItem
);

router.put(
    "/update-item/:itemId",
    [
        authMiddleware,
        checkPermission(operations.UPDATE_GROCERIES),
        groceryItemValidator.validateUpdateGroceryItem,
    ],
    groceryController.updateGroceryItem
);

router.put(
    "/manage-inventory/:itemId",
    [
        authMiddleware,
        checkPermission(operations.MANAGE_INVENTORY),
        groceryItemValidator.validateManageInventory,
    ],
    groceryController.manageInventory
);

module.exports = router;
