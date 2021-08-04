import { celebrate, Joi, Segments } from 'celebrate'

export const createUserValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    telephones: Joi.array().items(Joi.string().min(9)).min(1).required(),
    email: Joi.string().email().required()
  })
})

export const updateUserValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    userId: Joi.string().guid({
      version: 'uuidv4',
      separator: '-'
    }).required()
  }),
  [Segments.BODY]: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    telephones: Joi.array().items(Joi.string().min(9)).min(1),
    email: Joi.string().email()
  })
})
