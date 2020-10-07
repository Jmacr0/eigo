const fs = require('fs');
const path = require('path');
const db = require('../../models');
const passport = require('passport');

module.exports = {
    createUser: (req, res, next) => {
        console.log(req.body);
        passport.authenticate('register', (error, user, message) => {
            if (error) {
                next(error);
                return;
            }
            console.log('user', user)

            if (!user) {
                res.send({
                    success: false,
                    message,
                });
                return;
            }

            req.logIn(user, (error) => {
                if (error) {
                    next(error);
                    return;
                };

                const {
                    id,
                    username,
                } = user;

                res.send({
                    success: true,
                    data: {
                        user: {
                            id,
                            username,
                        },
                    },
                });
            });
        })(req, res, next);
    },
    login: (req, res, next) => {
        passport.authenticate('login', (error, user, message) => {
            if (error) {
                next(error);
                return;
            }
            if (!user) {
                res.send({
                    success: false,
                    message,
                });
                return;
            }

            req.logIn(user, (error) => {
                if (error) {
                    next(error);
                    return;
                }

                const {
                    id,
                    username,
                } = user;

                res.send({
                    success: true,
                    data: {
                        user: {
                            id,
                            username,
                        },
                    },
                });
            });
        })(req, res, next);
    },
}
