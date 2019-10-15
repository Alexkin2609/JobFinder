module.exports = {


  friendlyName: 'Update company',


  description: 'Updates a company.',


  inputs: {

    id: {
      description: 'The company\'s id',
      type: 'string',
      required: true
    },
    name: {
      description: 'The company\'s name',
      type: 'string',
      required: false
    },
    city: {
      description: 'The company\'s city',
      type: 'string',
      required: false
    },
    address: {
      description: 'The company\'s address',
      type: 'string',
      required: false
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

    var updatedCompany = await Something.update({
      name: inputs.name,
      city: inputs.city,
      address: inputs.address
    }).fetch();

    return exits.success(updatedCompany);

  }


};
