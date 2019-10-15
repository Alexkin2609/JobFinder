module.exports = {


  friendlyName: 'Create Company',


  description: 'Create a simple company.',


  inputs: {

    name: {
      description: 'The company\'s name',
      type: 'string',
      required: true
    },
    city: {
      description: '',
      type: 'string',
      required: true
    },
    address: {
      description: '',
      type: 'string',
      required: true
    },

  },


  exits: {

    success:{
      success: true
    },

    notCreated:{

    }

  },


  fn: async function (inputs, exits) {

    var user = await Company.create({
      name: inputs.name,
      city: inputs.city,
      address: inputs.address
    }).fetch();

    return exits.success(company);

  }


};
