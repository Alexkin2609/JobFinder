module.exports = {


  friendlyName: 'Find company',


  description: 'Finds a company.',


  inputs: {

  },


  exits: {

    success:{
      success: true
    },
    notFound:{

    }

  },


  fn: async function (inputs, exits) {

    var companies = await Company.find();

    return exits.success(companies);

  }


};
