module.exports = {


  friendlyName: 'Find one',


  description: 'Find a company with a specific id',


  inputs: {

    id: {
      description: 'The company\'s id',
      type: 'string',
      required: true
    }

  },


  exits: {

    success:{
      success: true
    },
    notDeleted:{

    }

  },


  fn: async function (inputs, exits) {

    var company = await Company.findOne({id: inputs.id});

    return exits.success(company);

  }


};
