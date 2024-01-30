const { body, validationResult } = require("express-validator");

exports.validateAddGroceryItem = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
        .isFloat({ min: 0 })
        .withMessage("Price must be a positive number"),
    body("quantity")
        .isInt({ min: 0 })
        .withMessage("Quantity must be a non-negative integer"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateUpdateGroceryItem = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
        .isFloat({ min: 0 })
        .withMessage("Price must be a positive number"),
    body("quantity")
        .isInt({ min: 0 })
        .withMessage("Quantity must be a non-negative integer"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateManageInventory = [
    body("quantity")
        .isInt({ min: 0 })
        .withMessage("Quantity must be a non-negative integer"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

// TODO
exports.validateBookGroceries = [];

exports.validateRemoveGroceries = [
    body("itemId").notEmpty().withMessage("Item ID is required"),
];
