module.exports = {


  friendlyName: 'Signup',


  description: 'Signup user.',


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
    notCreated:{

    }

  },


  fn: async function (inputs, exits) {

    var user = await User.create({
      email: inputs.email,
      password: inputs.password
    }).fetch();

    return exits.success(user);

  }


};
