const jwt = require('jsonwebtoken');

module.exports = {


  friendlyName: 'Jwt verify',


  description: '',


  inputs: {

    token: {
      description: 'The token',
      type: 'string',
      required: true
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
  
    var token = jwt.verify(inputs.token, '123456');

    return exits.success(token);

  }


};