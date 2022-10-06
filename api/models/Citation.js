/**
 * Citation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    student_id: { type: 'number', columnType: 'int' },
    curriculum_id: { type: 'number', columnType: 'int' },
    date: { type: 'ref', columnType: 'date' },
    initial_time: { type: 'ref', columnType: 'time' },
    final_time: { type: 'ref', columnType: 'time' },
    pending: { type: 'number', columnType: 'tinyint', }
  },

};

