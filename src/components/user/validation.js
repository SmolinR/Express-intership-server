const Joi = require('joi');

const userPost = Joi.object({
  email: Joi.string()
    .email()
    .min(3)
    .max(320)
    .required(),
  name: Joi.string()
    .alphanum()
    .min(3)
    .required(),
});
const userPatch = Joi.object({
  email: Joi.string()
    .email()
    .min(3)
    .max(320)
    .required(),
  name: Joi.string()
    .alphanum()
    .min(3)
    .required(),
});
const userDelete = Joi.object({
  email: Joi.string()
    .email()
    .min(3)
    .max(320)
    .required(),
});

module.exports = { userPost, userPatch, userDelete };
