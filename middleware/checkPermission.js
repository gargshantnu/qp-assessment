const isOperationAllowed = require("../utils/permissions").isOperationAllowed;

module.exports = (operation) => {
    return (req, res, next) => {
        if (isOperationAllowed(req?.userData?.role, operation)) {
            next();
        } else {
            // Permission denied, send a 403 Forbidden response
            res.status(403).json({ error: "Permission denied" });
        }
    };
};
