/**
 * Inscription.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        citation_id: { type: 'number', columnType: 'int' },
        student_id: { type: 'number', columnType: 'int' },
        inscription_date: { type: 'ref', columnType: 'date' },
        total_credits: { type: 'number', columnType: 'int' },
        active: { type: 'number', columnType: 'tinyint' }
    },

};