const jwt = require('jsonwebtoken');

module.exports = {


  friendlyName: 'Jwt sign',


  description: 'Jwt something.',


  inputs: {

    user: {
      description: 'The token data',
      type: 'ref',
      required: true
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {

    var token = jwt.sign(inputs.user, '123456', {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    return exits.success(token);

  }


};