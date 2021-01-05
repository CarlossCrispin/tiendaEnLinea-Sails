/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'products',
  attributes: {

    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    imgURL: {
      type: 'string'
    },
    stock: {
      type: 'number'
    },
    price: {
      type: 'number'
    },

  },

};

