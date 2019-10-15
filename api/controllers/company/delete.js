module.exports = {


  friendlyName: 'Delete company',


  description: 'Deletes a company.',


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

    var user = await Company.destroy({
      id: inputs.id
    }).fetch();

    return exits.success(company);

  }


};
