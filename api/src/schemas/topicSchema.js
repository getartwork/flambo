const Joi = require('joi');


module.exports = {
    name: Joi.string().min(2, 'utf8').required(),
};