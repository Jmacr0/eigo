const fs = require('fs');
const path = require('path');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            console.log(req)
        } catch (error) {
            next(error)
        }
    },
}
