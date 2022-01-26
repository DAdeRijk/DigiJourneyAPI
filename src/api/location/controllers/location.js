'use strict';

/**
 *  location controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::location.location', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
  async findByCode(ctx) {
    try {
      const { code } = ctx.params;
      const query = {populate: '*'}

      const entry = await strapi.db.query('api::location.location').findOne({
        select: ['code'],
        where: { code: code },
        populate: {questions: {}, answers: {}}
      });
      console.log(entry)

      for (const question of entry.questions) {
        const res = await strapi.db.query('api::question.question').findOne({
          select: ['question'],
          where: { id: question.id },
          populate: { answers: {}}
        });
        question.answers = res.answers;
      }

      return entry;
    } catch (err) {
      ctx.body = err;
    }
  },

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
  },

  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service('api::location.location').findOne(id, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
