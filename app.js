const shortid = require('shortid');

console.log(shortid.generate());

const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log(passwordSchema.validate(`qweqwe$`));
