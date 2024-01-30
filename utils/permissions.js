const roles = require("../constants/roles").roles;
const operations = require("../constants/operations").operations;

const permissions = {
    [operations.ADD_GROCERIES]: new Set([roles.ADMIN]),
    [operations.VIEW_GROCERIES]: new Set([roles.ADMIN, roles.USER]),
    [operations.BOOK_GROCERIES]: new Set([roles.ADMIN, roles.USER]),
    [operations.REMOVE_GROCERIES]: new Set([roles.ADMIN]),
    [operations.UPDATE_GROCERIES]: new Set([roles.ADMIN]),
    [operations.MANAGE_INVENTORY]: new Set([roles.ADMIN]),
};

const isOperationAllowed = (role, operation) => {
    return permissions[operation]?.has(role);
};

module.exports = {
    isOperationAllowed,
};
