/**
 * InscriptionDetail.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {
    tableName: 'inscription_detail',
    attributes: {
        inscription_id: { type: 'number', columnType: 'int' },
        subject_id: { type: 'number', columnType: 'int' },
        credits: { type: 'number', columnType: 'int' }
    },

};