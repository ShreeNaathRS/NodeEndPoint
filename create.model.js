const connector = require('./model/dbconnentor');
const Sequelize = require('sequelize');

class Create extends Sequelize.Model {

}

Create.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  }
}, {
  sequelize: connector,
  modelName: 'createTbls'
});



async function create(req, res, next) {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const reqBody = req.body;
      const { name, password } = reqBody;
      const post = await Create.create({ name, password });
      res.json({data: post});
    } catch (error) {
      console.log('log res : '+res);
      console.log('log error : '+error);
      next(error);
    }
  }

module.exports = {Create, create};
