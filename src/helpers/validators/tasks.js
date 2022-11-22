import Joi from 'joi';

/**
 * Validate the given tasks
 *
 * @param {any} tasks - Tasks to be validated
 * @returns {boolean}
 */
export const validateTasks = tasks => {
  const schema = Joi.object({
    tasks: Joi.array().items(
      Joi.object({
        id: Joi.string().required(),
        text: Joi.string().required().allow(''),
        done: Joi.boolean().required(),
        pinned: Joi.boolean().required(),
      })
    ),
  });

  const result = schema.validate(tasks);

  console.log({ result });

  return !result.error;
};
