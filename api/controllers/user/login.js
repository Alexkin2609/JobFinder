module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {

    email: {
      description: 'The user\'s email',
      type: 'string',
      required: true
    },
    password: {
      description: 'The user\'s password',
      type: 'string',
      required: true
    }

  },


  exits: {

    success:{
      success: true
    },

    notFound:{
      
      description: 'No user with the specified email was found in the database.',
      responseType: 'notFound',
      err: 'No user with the specified email was found.'
    }

  },


  fn: async function (inputs, exits) {

    var user = await User.findOne({
      email: inputs.email
    }).decrypt();

    if(user.password != inputs.password){
      return exits.notFound(user);
    }

    var token = await sails.helpers.jwtSign(user);

    return exits.success(token);

  }


};